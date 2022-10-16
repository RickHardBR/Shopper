export const formatDate = ( date: Date, style: any) => {
    const dateBr = date?.toLocaleDateString(
      "pt-BR", { dateStyle: style }
    );
    
    return dateBr
};