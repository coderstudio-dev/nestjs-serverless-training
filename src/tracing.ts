import { SimpleSpanProcessor } from '@opentelemetry/sdk-trace-base';
import { NodeSDK } from '@opentelemetry/sdk-node';
import * as process from 'process';
import { HttpInstrumentation } from '@opentelemetry/instrumentation-http';
import { ExpressInstrumentation } from '@opentelemetry/instrumentation-express';
import { NestInstrumentation } from '@opentelemetry/instrumentation-nestjs-core';
import { Resource } from '@opentelemetry/resources';
import { SemanticResourceAttributes } from '@opentelemetry/semantic-conventions';
import { JaegerExporter } from '@opentelemetry/exporter-jaeger';
// import { ZipkinExporter } from '@opentelemetry/exporter-zipkin';

// const traceExporter = new ConsoleSpanExporter();

const jaegerExporter = new JaegerExporter({
  // endpoint: 'http://138.2.65.251:14269/api/traces',
  endpoint: 'http://localhost:14268/api/traces',
});
const traceExporter = jaegerExporter;

// const zipKinExporter = new ZipkinExporter({
//   url: 'https://zipkin.coderstudio.site/',
// });
// const traceExporter = zipKinExporter;

export const otelSDK = new NodeSDK({
  resource: new Resource({
    [SemanticResourceAttributes.SERVICE_NAME]: 'nestjs-otel', // update this to a more relevant name for you!
  }),
  spanProcessor: new SimpleSpanProcessor(traceExporter),
  // spanProcessor: new BatchSpanProcessor(traceExporter),
  instrumentations: [
    new HttpInstrumentation(),
    new ExpressInstrumentation(),
    new NestInstrumentation(),
  ],
});

// gracefully shut down the SDK on process exit
process.on('SIGTERM', () => {
  otelSDK
    .shutdown()
    .then(
      () => console.log('SDK shut down successfully'),
      (err) => console.log('Error shutting down SDK', err),
    )
    .finally(() => process.exit(0));
});
