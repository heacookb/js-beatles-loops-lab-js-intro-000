function theBeatlesPlay(musicians, instruments)
{
  var array = new Array();
  var n = musicians.length;
  for(let i = 0; i < n; i++)
  {
    array[i] = musicians[i] + " plays " +[instruments];
  }
  return array;
}