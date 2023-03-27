import { Create, FindByProfileId } from './useCases';

export interface ProfileRepositoriesRepoInterface
  extends Create,
    FindByProfileId {}
