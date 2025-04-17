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