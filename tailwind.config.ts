import { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";
export default {
  content: ["./src/app/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [typography],
} satisfies Config;
