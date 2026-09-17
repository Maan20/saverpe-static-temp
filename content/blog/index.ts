import type { PostInput } from "@/lib/blog";
import { basics } from "./basics";
import { brandGuides2 } from "./brand-guides-2";
import { guides2 } from "./guides-2";
import { festivals2 } from "./festivals-2";
import { lifeMoments } from "./life-moments";
import { basics2 } from "./basics-2";
import { corporate } from "./corporate";
import { festivals } from "./festivals";
import { guides } from "./guides";
import { smart } from "./smart";
import { spotlights } from "./spotlights";

export const posts: PostInput[] = [...basics, ...guides, ...festivals, ...smart, ...spotlights, ...corporate, ...brandGuides2, ...guides2, ...festivals2, ...lifeMoments, ...basics2];
