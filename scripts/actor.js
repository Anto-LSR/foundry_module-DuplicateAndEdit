function duplicateActor(name, actor) {
  return actor.clone({ name: name }, { save: true });
}
