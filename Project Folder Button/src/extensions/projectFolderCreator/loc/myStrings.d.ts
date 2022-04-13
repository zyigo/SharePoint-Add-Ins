declare interface IProjectFolderCreatorCommandSetStrings {
  Command1: string;
  Command2: string;
}

declare module 'ProjectFolderCreatorCommandSetStrings' {
  const strings: IProjectFolderCreatorCommandSetStrings;
  export = strings;
}
