// Block Scope with let and const:
{
  let blocklet = "visible inside the block";
  const blockConst = "also only inside the block";
  console.log(blocklet);
  console.log(blockConst);
}
try {
  console.log(BlockLet);
} catch (error) {
  console.log("`blocklet` is not accesible outside the block.");
}
try {
  console.log(BlockConst);
} catch (error) {
  console.log("`blockconst` is not accessible outside the block.");
}
