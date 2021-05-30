export default interface IAuthRepository {
  getCommits(page?: number): Promise<any>;
};