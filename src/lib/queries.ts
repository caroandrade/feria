const baseUrl= "https://www.mendoza.edu.ar"; 
//  crear una variable y asignarle el valor de la variable de entorno osea la dirección del sitio wordpress


import { Post, Category } from '@/lib/types';

const revalidateTime: number = 86400 // un dia en segundo



export async function getCategorias(): Promise<Category[]> {
    const response = await fetch (`${baseUrl}/wp-json/wp/v2/categories`);
    const data = await response.json();
    return data; 
    
}


export async function getAllPost(
    pagesNumber:number=1, 
    perPage = 10, 
    searchTerm:string="",
    categorias: number =0
): Promise<{posts: Post[], totalPages: number}>{
    const params = new URLSearchParams({
        per_page: perPage.toString(),
        page: pagesNumber.toString(),
        search: searchTerm
    });

    if(categorias !==0){
        params.set('categorias', categorias.toString());
    }

    //console.log(`${baseUrl}/wp-json/wp/v2/posts?${params}`);
    const response = await fetch (`${baseUrl}/wp-json/wp/v2/posts?${params.toString()}`,
    {
    next:{
    revalidate:revalidateTime
    }
    });
    const posts = await response.json();
    const totalPages = parseInt(response.headers.get('X-WP-TotalPages')?? '1');
    // console.log(response.headers.get('X-WP-TotalPage'));    
    // console.log(response.headers);
    return {posts, totalPages}; 
}