import { Create, Remove, Update, FindAll, FindOne } from './useCases';

export interface ArticleReactionRepoInterface
  extends Create,
    Remove,
    Update,
    FindAll,
    FindOne {}
