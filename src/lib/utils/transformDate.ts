

export const transformDate = (date: string) => {
    const dateObj = new Date(date);
    const local = dateObj.toLocaleString('fr-FR');
    return local;
}   