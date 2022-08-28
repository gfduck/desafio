export const MODE = "MODE";

export const change_mode = (mode) => {
  let json = {};
  if (localStorage.getItem("mode")) {
    json = JSON.parse(localStorage.getItem("mode"));
    json.value = mode;
  } else {
    json = {
      mode,
    };
  }
  localStorage.setItem("mode", JSON.stringify(json));

  return {
    type: MODE,
    payload: {
      mode,
    },
  };
};
