export const CHANGE_INSIDE = "CHANGE_INSIDE";

export const change_inside = (inside) => {
  let json = {};
  if (localStorage.getItem("sandwich")) {
    json = JSON.parse(localStorage.getItem("sandwich"));
    json.inside = inside;
  } else {
    json = {
      inside,
    };
  }
  localStorage.setItem("sandwich", JSON.stringify(json));

  return {
    type: CHANGE_INSIDE,
    payload: {
      inside,
    },
  };
};
