import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "@typescript-eslint/no-unused-vars": "off", // Tắt cảnh báo biến không dùng
      "react/jsx-key": "off", // Tắt cảnh báo thiếu key khi lặp danh sách
      "@typescript-eslint/no-explicit-any": "off", // Tắt cảnh báo `any`
    },
  },
];

export default eslintConfig;
