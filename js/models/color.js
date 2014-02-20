App.Color = DS.Model.extend({
  name: DS.attr('string'),
  hexCode: DS.attr('string')
});

App.Color.FIXTURES = [
 {
   id: 1,
   name: 'black',
   hexCode: 'black'
 },
 {
  id: 2,
  name: 'other',
  hexCode: 'purple'
 },
 {
   id: 3,
   name: 'black',
   hexCode: 'green'
 },
 {
  id: 4,
  name: 'other',
  hexCode: 'red'
 },
 {
   id: 5,
   name: 'black',
   hexCode: 'yellow'
 },
 {
  id: 6,
  name: 'other',
  hexCode: 'blue'
 }
];
