export const convertSlug = (TXT:string) => {
    return TXT.toLowerCase().replace(/ /g,'-').replace(/[^\w-]+/g,'')
}