

export type Category = {
    
        id:          number;
        count:       number;
        description: string;
        link:        string;
        name:        string;
        slug:        string;
        taxonomy:    "category";
        parent:      number;
       
    
}

export interface Post {
        id:             number;
        title:          {rendered:string};
        slug:           string;
        date:           Date;
        modified:       string;
        content:        {rendered: string};
        status:         {rendered: string};
        type:           string ;
        link:           string;
        excerpt:        {rendered: string};
        author:         number;
        featured_media: number;
      
        categories:     number[];
        tags:           number[];
        class_list:     string[];
       
    }
    
    export type ListadoProps = { 
        posts: Post[],
        currentePage?: number,
         totalPages?: number,
        searchTerm?: string,
        categorias?: number
        title?: string,
    }