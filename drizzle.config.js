/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./utils/schema.tsx",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://ai-content-generator_owner:yiJ1umhFTY4v@ep-dawn-cake-a1acr9jt.ap-southeast-1.aws.neon.tech/ai-content-generator?sslmode=require",
  },
};
