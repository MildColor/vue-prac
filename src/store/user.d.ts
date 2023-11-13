export declare const useUserStore: import("pinia").StoreDefinition<"user", import("pinia")._UnwrapAll<Pick<{
    isLoggedIn: import("vue").Ref<boolean>;
    updateUserInfo: (accessToken: string | null) => void;
    handleAuthAction: (formStore: User) => Promise<void>;
}, "isLoggedIn">>, Pick<{
    isLoggedIn: import("vue").Ref<boolean>;
    updateUserInfo: (accessToken: string | null) => void;
    handleAuthAction: (formStore: User) => Promise<void>;
}, never>, Pick<{
    isLoggedIn: import("vue").Ref<boolean>;
    updateUserInfo: (accessToken: string | null) => void;
    handleAuthAction: (formStore: User) => Promise<void>;
}, "updateUserInfo" | "handleAuthAction">>;
