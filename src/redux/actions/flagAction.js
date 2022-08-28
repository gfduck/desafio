export const CHANGE_FLAG = "CHANGE_FLAG";

export const change_flag = (dispatch, color) => {
  let json = {};
  if (localStorage.getItem("sandwich")) {
    json = JSON.parse(localStorage.getItem("sandwich"));
    json.color = color;
  } else {
    json = {
      color,
    };
  }
  localStorage.setItem("sandwich", JSON.stringify(json));
  dispatch({
    type: CHANGE_FLAG,
    payload: {
      color,
    },
  });
};
