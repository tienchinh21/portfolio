export type Song = {
  url: string;
  cover: string;
  title: string;
  channel: string;
};




  export type GuestbookEntry = {
    id: string;
    content: string;
    createdAt: string;
    userId: string;
    user: {
        name: string | null;
        image: string | null;
        role?: string;
        accounts: {
            providerId: string;
        }[];
    };
};


  export type ApiResponse<T = any> = {
    success: boolean;
    data?: T;
    message?: string;
};