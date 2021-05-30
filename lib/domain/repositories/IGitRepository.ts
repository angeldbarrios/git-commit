export default interface IAuthRepository {
  getCommits(): Promise<any>;
};