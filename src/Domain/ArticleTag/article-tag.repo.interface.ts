import {
  Create,
  Remove,
  FindAll,
  FindOne,
  FindByArticleId,
  FindByTagId,
} from './useCases';

export interface ArticleTagRepoInterface
  extends Create,
    Remove,
    FindAll,
    FindOne,
    FindByArticleId,
    FindByTagId {}
