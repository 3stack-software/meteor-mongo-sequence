sequence = function(collection, $query, field, step) {
  var $modifier, affected, result;
  if (step == null) {
    step = 1;
  }
  $modifier = {
    $inc: {}
  };
  $modifier.$inc["seq." + field] = step;
  affected = collection.update($query, $modifier);
  if (affected === 0) {
    throw new Error("Could not find document matching", $query);
  }
  result = collection.findOne($query, {
    fields: {
      seq: 1
    }
  });
  return result.seq[field];
};
