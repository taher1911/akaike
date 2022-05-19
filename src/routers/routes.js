import {
  Home,
  Login,
  Register,
  PublicDatasets,
  Datasets,
  DatasetDetails,
  CreateDatabase,
  Models,
  ModelDetails,
  PublicModels,
  CreateModel,
  TestingModel,
} from "../pages";

export const routes = [
  { id: 1, path: "/", Component: Home, isProtected: true },
  { id: 2, path: "/login", Component: Login, isProtected: true },
  { id: 3, path: "/register", Component: Register, isProtected: true },
  { id: 4, path: "/datasets", Component: Datasets, isProtected: true },
  {
    id: 5,
    path: "/public-datasets",
    Component: PublicDatasets,
    isProtected: true,
  },
  {
    id: 6,
    path: "/datasets/:id",
    Component: DatasetDetails,
    isProtected: true,
  },
  {
    id: 7,
    path: "/create-database",
    Component: CreateDatabase,
    isProtected: true,
  },
  {
    id: 8,
    path: "/models",
    Component: Models,
    isProtected: true,
  },
  {
    id: 9,
    path: "/models/:id",
    Component: ModelDetails,
    isProtected: true,
  },
  {
    id: 10,
    path: "/public-models",
    Component: PublicModels,
    isProtected: true,
  },
  {
    id: 11,
    path: "/create",
    Component: CreateModel,
    isProtected: true,
  },
  {
    id: 12,
    path: "/testing-model/:id",
    Component: TestingModel,
    isProtected: true,
  },
];
