export const createListing = (data) => {
    return (
    $.ajax({
      method: 'POST',
      url: 'api/lists',
      data
      //{movieId,userId}
    })
  );}

  export const fetchList = (data) => {
          return (
        $.ajax({
            method: 'GET',
            url: 'api/lists',
            data
        })
  );}

  export const deleteListing = (listId,data) => (
    $.ajax({
      method: 'DELETE',
      url: `api/lists/${listId}`,
      data
    })
  );
  