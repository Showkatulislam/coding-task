

const findById = async (Model,id) => {
  try {
    const options = { password: 0 };
    const user = await Model.findById(id, options);
    if (!user) {
      throw createHttpError(404, `{Model.modelName} does not exit`);
    }
    return user;
  } catch (error) {
    if (error instanceof mongoose.Error) {
      throw createHttpError(404, "Invalid user Id");
      return
    }
    throw error;
  }
};


module.exports=findById