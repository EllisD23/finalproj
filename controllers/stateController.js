 const data = {
   states: require("../model/states.json"),
   setstates: (data) => {
     this.states = data;
  },
};
//const State = require("../model/States");

//Get all states
const getStates = async (req, res) => {
  res.json(data.states);
};

//Create an Funfact
const createNewFunfact = async (req, res) => {
  if (!req?.body.stateCode) {
    return res.status(400).json({ message: "State code is required" });
  }
  try {
    const result = await state.create({
      stateCode: req.body.stateCode,
      funfacts: req.body.funfacts,
    });
    res.status(201).json(result);
  } catch (err) {
    console.log(err);
  }
};


//Delete Funfact
const deleteFunfact = async (req, res) => {
  if (!req?.body.id) {
    return res.status(400).json({ message: "Employee Id is required. " });
  }

  const employee = await Employee.findOne({ _id: req.body.id }).exec();

  if (!employee) {
    return res
      .status(204)
      .json({ message: `No Funfact matches Id ${req.body.id}` });
  }
  const result = await employee.deleteOne({ _id: req.body.id });
  res.json(result);
};

//Get State
const getState = async (req, res) => {
  if (!req?.params?.code) {
    return res.status(404).json({ message: "error: 404 Not Found" });
  }
  
  const state = await data.states.filter((sta) => sta.code === req.params.code.toUpperCase());
  
  if (!state) {
    return res
      .status(204)
      .json({ message: `No State matches code ${req.params.code}` });
  }
  res.json(state);
};

const getCapital = async (req, res) => {
  const state = await data.states.filter((sta) => sta.code === req.params.code.toUpperCase());
  const capital = await state.find(); 
  console.log(state);
  res.json(capital);

}

const getNickname = async (req, res) => {
  const state = await data.states.filter((sta) => sta.code === req.params.code.toUpperCase());
  const nickname = state.find(capital_city);
  console.log(nickname);
  res.json(nickname);

}

const getPopulation = async (req, res) => {
  const state = await data.states.filter((sta) => sta.code === req.params.code.toUpperCase());
  const population = state.find(capital_city);
  console.log(population);
  res.json(population);

}

const getAdmission = async (req, res) => {
  const state = await data.states.filter((sta) => sta.code === req.params.code.toUpperCase());
  const admission = state.find(capital_city);
  console.log(admission);
  res.json(admission);

}

module.exports = {
  getStates,
  deleteFunfact,
  createNewFunfact,
  getState,
  getCapital,
  getNickname,
  getPopulation,
  getAdmission,
};