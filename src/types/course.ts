export interface CourseData {
  allAccess: boolean;
  avgRating: number;
  category: Category;
  chapterTotal: number;
  code: string;
  continue: ContinueProgress;
  courseImageUrl: string;
  coursePrerequisite: string;
  id: number;
  inSession: boolean;
  isCertificate: boolean;
  isHighlight: boolean;
  isLocked: boolean;
  isOpenToRegister: boolean;
  isRegister: boolean;
  isWishlist: boolean;
  learningEndDate: string;
  learningStartDate: string;
  name: string;
  progress: number;
  published: boolean;
  registerEndDate: string;
  registerStartDate: string;
  reviewCount: number;
  supportTrainers?: Trainer[];
  trainer: Trainer;
}

export interface Category {
  id: number;
  name: string;
}

export interface ContinueProgress {
  chapterId: number;
  courseId: number;
  subType: string;
  targetId: number;
  type: string;
}

export interface Trainer {
  bio: string;
  career: string;
  experience: string;
  firstname: string;
  id: number;
  lastname: string;
  name: string;
  nickname: string;
  profileImageUrl: string;
  title: string;
}

export interface CourseListPayload {
  keyword?: string;
  offset: number;
  max: number;
  categoryIds?: string;
  ratings?: number;
  trainerIds?: number;
  orderBy: string;
  orderType: string;
}

export interface CourseObjectResponse {
  courses: CourseData[];
  total: number;
}

export interface CourseObjectDetailResponse {
  course: CourseData;
  total: number;
}

export interface CourseCategoryResponse {
  categories: Category[];
  total: number;
}

interface FileItem {
  bookmarks: any[];
  currentPage: number;
  currentTime: number;
  duration: string;
  filename: string;
  id: number;
  isRestart: boolean;
  maxTime: number;
  orientation: string;
  totalPages: number;
  totalTime: number;
  type: string;
  type_id: number;
}

interface Material {
  code: string;
  files: FileItem[];
  id: number;
  isLocked: boolean;
  isSuccess: boolean;
  name: string;
  no: number;
  published: boolean;
  type: string;
}

interface ChapterInfo {
  code: string;
  id: number;
  name: string;
  no: number;
  studyOrder: boolean;
  time: number;
}

export interface Chapter {
  chapter: ChapterInfo;
  materialTotal: number;
  materials: Material[];
  postQuizTotal: number;
  postQuizs: any[];
  preQuizTotal: number;
  preQuizs: any[];
}

export interface FileResource {
  id: number;
  nameFile: string;
  pathFile: string;
  shareToChat: boolean;
  shareToEmail: boolean;
  size: string;
  title: string;
  type: {
    extension: string;
    id: number;
    name: string;
  };
}

export interface CourseIndexObjectResponse {
  chapters: Chapter[];
  files: FileResource[];
  total: number;
}