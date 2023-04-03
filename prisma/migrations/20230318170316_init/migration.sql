-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "emailAddress" VARCHAR(256) NOT NULL,
    "emailVerified" BOOLEAN NOT NULL,
    "authToken" TEXT NOT NULL,
    "session" TEXT NOT NULL,
    "sessionExpire" TIMESTAMP(3) NOT NULL,
    "lastLogin" TIMESTAMP(3) NOT NULL,
    "isActive" BOOLEAN NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "countries" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(256) NOT NULL,
    "countryCode" VARCHAR(256) NOT NULL,
    "iso2" VARCHAR(256) NOT NULL,
    "iso3" VARCHAR(256) NOT NULL,

    CONSTRAINT "countries_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "profiles" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "firstName" VARCHAR(256) NOT NULL,
    "lastName" VARCHAR(256) NOT NULL,
    "middleName" VARCHAR(256),
    "displayName" VARCHAR(256),
    "about" VARCHAR(256),
    "skillLanguages" TEXT,
    "work" TEXT,
    "emailAddress" VARCHAR(256) NOT NULL,
    "stateProvinceCity" VARCHAR(256),
    "countryId" INTEGER NOT NULL,
    "currentLearning" TEXT,
    "currentHacking" TEXT,
    "availableFor" TEXT,
    "photo" TEXT,

    CONSTRAINT "profiles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "articles" (
    "id" SERIAL NOT NULL,
    "profileId" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "body" TEXT NOT NULL,
    "coverBanner" VARCHAR(256) NOT NULL,
    "status" VARCHAR(256) NOT NULL,
    "isPinned" BOOLEAN,
    "draftBy" INTEGER,
    "draftAt" TIMESTAMP(3),
    "postedBy" INTEGER,
    "postedAt" TIMESTAMP(3),
    "createdBy" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedBy" INTEGER NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "articles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "app_constants" (
    "id" SERIAL NOT NULL,
    "category" VARCHAR(256) NOT NULL,
    "name" VARCHAR(256) NOT NULL,
    "icon" TEXT,

    CONSTRAINT "app_constants_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "badges" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(256) NOT NULL,
    "badge" TEXT NOT NULL,
    "createdBy" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "badges_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tags" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "tagCount" INTEGER NOT NULL,

    CONSTRAINT "tags_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "profile_badges" (
    "id" SERIAL NOT NULL,
    "profileId" INTEGER NOT NULL,
    "badgeId" INTEGER NOT NULL,
    "status" VARCHAR(256) NOT NULL,
    "createdBy" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "profile_badges_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "profile_follows" (
    "id" SERIAL NOT NULL,
    "profileId" INTEGER NOT NULL,
    "following" INTEGER NOT NULL,
    "status" VARCHAR(256) NOT NULL,
    "createdBy" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "profile_follows_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "profile_repositories" (
    "id" SERIAL NOT NULL,
    "profileId" INTEGER NOT NULL,
    "repoLink" TEXT NOT NULL,
    "appConstantId" INTEGER NOT NULL,
    "createdBy" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "profile_repositories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "saved_articles" (
    "id" SERIAL NOT NULL,
    "profileId" INTEGER NOT NULL,
    "articleId" INTEGER NOT NULL,
    "savedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "saved_articles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "article_reactions" (
    "id" SERIAL NOT NULL,
    "articleId" INTEGER NOT NULL,
    "appConstantId" INTEGER NOT NULL,
    "reactedBy" INTEGER NOT NULL,
    "reactedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "article_reactions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "article_tags" (
    "id" SERIAL NOT NULL,
    "tagsId" INTEGER NOT NULL,
    "articleId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "article_tags_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "comments" (
    "id" SERIAL NOT NULL,
    "articleId" INTEGER NOT NULL,
    "parentId" INTEGER,
    "comments" TEXT NOT NULL,
    "createdBy" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "comments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "comment_reactions" (
    "id" SERIAL NOT NULL,
    "commentId" INTEGER NOT NULL,
    "appConstantId" INTEGER NOT NULL,
    "reactedBy" INTEGER NOT NULL,
    "reactedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "comment_reactions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "articles_title_key" ON "articles"("title");

-- AddForeignKey
ALTER TABLE "profiles" ADD CONSTRAINT "profiles_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "profiles" ADD CONSTRAINT "profiles_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "countries"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "articles" ADD CONSTRAINT "articles_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "profiles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "profile_badges" ADD CONSTRAINT "profile_badges_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "profiles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "profile_badges" ADD CONSTRAINT "profile_badges_badgeId_fkey" FOREIGN KEY ("badgeId") REFERENCES "badges"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "profile_follows" ADD CONSTRAINT "profile_follows_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "profiles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "profile_follows" ADD CONSTRAINT "profile_follows_following_fkey" FOREIGN KEY ("following") REFERENCES "profiles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "profile_repositories" ADD CONSTRAINT "profile_repositories_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "profiles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "profile_repositories" ADD CONSTRAINT "profile_repositories_appConstantId_fkey" FOREIGN KEY ("appConstantId") REFERENCES "app_constants"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "saved_articles" ADD CONSTRAINT "saved_articles_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "profiles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "saved_articles" ADD CONSTRAINT "saved_articles_articleId_fkey" FOREIGN KEY ("articleId") REFERENCES "articles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "article_reactions" ADD CONSTRAINT "article_reactions_articleId_fkey" FOREIGN KEY ("articleId") REFERENCES "articles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "article_reactions" ADD CONSTRAINT "article_reactions_appConstantId_fkey" FOREIGN KEY ("appConstantId") REFERENCES "app_constants"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "article_tags" ADD CONSTRAINT "article_tags_tagsId_fkey" FOREIGN KEY ("tagsId") REFERENCES "tags"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "article_tags" ADD CONSTRAINT "article_tags_articleId_fkey" FOREIGN KEY ("articleId") REFERENCES "articles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comments" ADD CONSTRAINT "comments_articleId_fkey" FOREIGN KEY ("articleId") REFERENCES "articles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comment_reactions" ADD CONSTRAINT "comment_reactions_commentId_fkey" FOREIGN KEY ("commentId") REFERENCES "comments"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comment_reactions" ADD CONSTRAINT "comment_reactions_appConstantId_fkey" FOREIGN KEY ("appConstantId") REFERENCES "app_constants"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
