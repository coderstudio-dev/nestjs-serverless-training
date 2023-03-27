import { Create, FindByProfileIdProfileRepo } from './useCases';

export interface ProfileRepositoriesRepoInterface
  extends Create,
    FindByProfileIdProfileRepo {}
