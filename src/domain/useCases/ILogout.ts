export interface ILogout {
    execute(refreshToken:string):Promise<void>
}