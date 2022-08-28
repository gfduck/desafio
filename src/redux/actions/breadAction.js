export const CHANGE_BREAD = "CHANGE_BREAD";

export const change_bread = (dispatch, bread) => {
  let json = {};

  if (localStorage.getItem("sandwich")) {
    json = JSON.parse(localStorage.getItem("sandwich"));
    json.bread = bread;
  } else {
    json = {
      bread,
    };
  }
  localStorage.setItem("sandwich", JSON.stringify(json));

  dispatch({
    type: CHANGE_BREAD,
    payload: {
      bread,
    },
  });
};
