

export const transformDate = (date: string): {date: string, time:string} => {
    const dateObj = new Date(date);
    const local = dateObj.toLocaleString('fr-FR');
    const dateArray = local.split(' ');
    return {
        date: dateArray[0],
        time: dateArray[1]
    };
}   