const asyncHandler = require("express-async-handler")

const User = require("../models/userModel")
const Ticket = require("../models/ticketModel")

const getTickets = asyncHandler (async (req, res) => {

  res.status(200).json({message: "get tickets"})
})

const createTicket = asyncHandler (async (req, res) => {

  res.status(200).json({message: "create ticket"})
})

module.exports = {
  getTickets,
  createTicket
}