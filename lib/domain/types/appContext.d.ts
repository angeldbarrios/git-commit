import IGitRepository from "../repositories/IGitRepository";

export type Repositories = {
  gitRepository?: IGitRepository;
};

export type AppContext = {
  repositories: Repositories;
  errors?: any;
}