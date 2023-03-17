import {
  Create,
  Remove,
  Update,
  FindAll,
  FindOne,
  FindDrafts,
} from './useCases';

export interface ArticleRepoInterface
  extends Create,
    Remove,
    Update,
    FindAll,
    FindOne,
    FindDrafts {}
