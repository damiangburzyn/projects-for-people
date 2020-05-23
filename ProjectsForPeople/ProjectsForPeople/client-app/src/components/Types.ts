export  interface Project {
     Id: number;
     Title: string;
     ShortDescription: string;
     Image: string;
     Owner: User|null;
    }

export  interface ProjectFull extends Project {
    Html: string;
    GithubLink: string;
    SourceCode: string;
    }
export  class  User  {
   public Id: number|null = null;
   public Name: string = '';
   public Surname: string = '';
   public Avatar: string = '';
    }
