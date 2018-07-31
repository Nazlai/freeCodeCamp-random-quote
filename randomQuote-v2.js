"use strict";
const quotes = [
  {
    author: 'Hannah Arendt',
    quote: [
      'The sad truth is that most evil is done by people who never make up their minds to be good or evil.',
      'Storytelling reveals meaning without committing the error of defining it.',
      'There are no dangerous thoughts; thinking itself is dangerous.',
      'Forgiveness is the key to action and freedom.',
      'Dedicate yourself to the good you deserve and desire for yourself. Give yourself peace of mind. You deserve to be happy. You deserve delight.',
      'Only crime and the criminal, it is true, confront us with the perplexity of radical evil; but only the hypocrite is really rotten to the core.',
      'Only the mob and the elite can be attracted by the momentum of totalitarianism itself. The masses have to be won by propaganda.',
      'The most radical revolutionary will become a conservative the day after the revolution.',
      'Promises are the uniquely human way of ordering the future, making it predictable and reliable to the extent that this is humanly possible.',
      'This is the precept by which I have lived: Prepare for the worst; expect the best; and take what comes.',
      'The aim of totalitarian education has never been to instill convictions but to destroy the capacity to form any.',
      'Under conditions of tyranny it is far easier to act than to think.',
      'Education is the point at which we decide whether we love the world enough to assume responsibility for it, and by the same token save it from that ruin which except for renewal, except for the coming of the new and the young, would be inevitable. And education, too, is where we decide whether we love our children enough not to expel them from our world and leave them to their own devices, nor to strike from their hands their chance of undertaking something new, something unforeseen by us, but to prepare them in advance for the task of renewing a common world.',
      'The point, as Marx saw it, is that dreams never come true.',
      'Revolutionaries do not make revolutions! The revolutionaries are those who know when power is lying in the street and when they can pick it up. Armed uprising by itself has never yet led to revolution.'
    ]
  },
  {
    author: 'Walter Benjamin',
    quote: [
      'The only way of knowing a person is to love them without hope.',
      'There is no document of civilization that is not at the same time a document of barbarism.',
      'All efforts to make politics aesthetic culminate in one thing, war.',
      'The art of storytelling is reaching its end because the epic side of truth, wisdom, is dying out.',
      'Every passion borders on the chaotic, but the collector\'s passion borders on the chaos of memories.',
      'The camera introduces us to unconscious optics as does psychoanalysis to unconscious impulses.',
      'The experience of our generation: that capitalism will not die a natural death.',
      'We collect books in the belief that we are preserving them when in fact it is the books that preserve their collector.',
      'To be happy is to be able to become aware of oneself without fright.',
      'Even the most perfect reproduction of a work of art is lacking in one element: its presence in time and space, its unique existence at the place where it happens to be.',
      'Those who do not learn how to decipher photographs will be the illiterate of the future.',
      'The concept of progress must be grounded in the idea of catastrophe. That things are \'status quo\' is the catastrophe.',
      'Taking food alone tends to make one hard and coarse. Those accustomed to it must lead a Spartan life if they are not to go downhill. Hermits have observed, if for only this reason, a frugal diet. For it is only in company that eating is done justice; food must be divided and distributed if it is to be well received.',
      'Capitalism is a purely cultic religion, perhaps the most extreme that ever existed.',
      'All human knowledge takes the form of interpretation.',
      'The destructive character lives from the feeling, not that life is worth living, but that suicide is not worth the trouble.'
    ]
  },
  {
    author: 'Max Weber',
    quote: [
      'It is not true that good can follow only from good and evil only from evil, but that often the opposite is true. Anyone who fails to see this is, indeed, a political infant.',
      'In a democracy the people choose a leader in whom they trust. Then the chosen leader says, \'Now shut up and obey me.\' People and party are then no longer free to interfere in his business.',
      'No sociologist, for instance, should think himself too good, even in his old age, to make tens of thousands of quite trivial computations in his head and perhaps for months at a time.',
      'A government is an institution that holds a monopoly on the legitimate use of violence.',
      'Nothing is worthy of man as man unless he can pursue it with passionate devotion.',
      'The impulse to acquisition, pursuit of gain, of money, of the greatest possible amount of money, has in itself nothing to do with capitalism. This impulse exists and has existed among waiters, physicians, coachmen, artists, prostitutes, dishonest officials, soldiers, nobles, crusaders, gamblers, and beggars.',
      'The great virtue of bureaucracy - indeed, perhaps its defining characteristic ~ was that it was an institutional method for applying general rules to specific cases, thereby making the actions of government fair and predictable.',
      'Man does not by nature wish to earn more and more money.',
      'The primary task of a useful teacher is to teach his students to recognize \'inconvenient\' facts - I mean facts that are inconvenient for their party opinions.',
      'Certainly all historical experience confirms the truth - that man would not have attained the possible unless time and again he had reached out for the impossible.',
      'Ideas come when we do not expect them, and not when we are brooding and searching at our desks. Yet ideas would certainly not come to mind had we not brooded at our desks and searched for answers with passionate devotion.',
      'Not everyone realises that to write a really good piece of journalism is at least as demanding intellectually as the achievement of any scholar.',
      'The problem — the experience of the irrationality of the world — has been the driving force of all religious evolution. The Indian doctrine of karma, Persian dualism, the doctrine of original sin, predestination and the deus absconditus, all these have grown out of this experience. Also the early Christians knew full well the world is governed by demons and that he who lets himself in for politics, that is, for power and force as means, contracts with diabolical powers and for his action it is not true that good can follow only from good and evil only from evil, but that often the opposite is true. Anyone who fails to see this is, indeed, a political infant.'
    ]
  },
  {
    author: 'Karl Marx',
    quote: [
      'The oppressed are allowed once every few years to decide which particular representatives of the oppressing class are to represent and repress them.',
      'The philosophers have only interpreted the world, in various ways. The point, however, is to change it.',
      'Surround yourself with people who make you happy. People who make you laugh, who help you when you’re in need. People who genuinely care. They are the ones worth keeping in your life. Everyone else is just passing through.',
      'The last capitalist we hang shall be the one who sold us the rope.',
      `The history of all hitherto existing society is the history of class struggles.

      Freeman and slave, patrician and plebeian, lord and serf, guildmaster and journeyman, in a word, oppressor and oppressed, stood in constant opposition to one another, carried on an uninterrupted, now hidden, now open fight, that each time ended, either in the revolutionary reconstitution of society at large, or in the common ruin of the contending classes.`,
      'The less you eat, drink and read books; the less you go to the theatre, the dance hall, the public house; the less you think, love, theorize, sing, paint, fence, etc., the more you save-the greater becomes your treasure which neither moths nor dust will devour-your capital. The less you are, the more you have; the less you express your own life, the greater is your alienated life-the greater is the store of your estranged being.',
      'To be radical is to grasp things by the root.',
      'Religion is the impotence of the human mind to deal with occurrences it cannot understand.',
      'Society does not consist of individuals, but expresses the sum of interrelations, the relations within which these individuals stand.',
    ]
  },
  {
    author: 'Michel Foucault',
    quote: [
      'People know what they do; frequently they know why they do what they do; but what they don\'t know is what what they do does.',
      'I don\'t feel that it is necessary to know exactly what I am. The main interest in life and work is to become someone else that you were not in the beginning.',
      'Where there is power, there is resistance.',
      'What strikes me is the fact that in our society, art has become something which is related only to objects and not to individuals, or to life. That art is something which is specialized or which is done by experts who are artists. But couldn\'t everyone\'s life become a work of art? Why should the lamp or the house be an art object, but not our life?',
      'I\'m no prophet. My job is making windows where there were once walls.',
      'Knowledge is not for knowing: knowledge is for cutting.',
      'I don\'t write a book so that it will be the final word; I write a book so that other books are possible, not necessarily written by me.',
      'Maybe the target nowadays is not to discover what we are but to refuse what we are.',
      'The strategic adversary is fascism... the fascism in us all, in our heads and in our everyday behavior, the fascism that causes us to love power, to desire the very thing that dominates and exploits us.',
      'The real political task in a society such as ours is to criticize the workings of institutions that appear to be both neutral and independent, to criticize and attack them in such a manner that the political violence that has always exercised itself obscurely through them will be unmasked, so that one can fight against them.',
      'Schools serve the same social functions as prisons and mental institutions- to define, classify, control, and regulate people.',
      'The imaginary is not formed in opposition to reality as its denial or compensation; it grows among signs, from book to book, in the interstice of repetitions and commentaries; it is born and takes shape in the interval between books. It is the phenomena of the library.',
      'I am hopelessly in love with a memory. An echo from another time, another place.',
      'The intellectual was rejected and persecuted at the precise moment when the facts became incontrovertible, when it was forbidden to say that the emperor had no clothes.',
      'But the guilty person is only one of the targets of punishment. For punishment is directed above all at others, at all the potentially guilty.',
      'Justice must always question itself, just as society can exist only by means of the work it does on itself and on its institutions.',
    ]
  },
  {
    author: 'Susan Sontag',
    quote: [
      'All photographs are memento mori. To take a photograph is to participate in another person’s (or thing’s) mortality, vulnerability, mutability. Precisely by slicing out this moment and freezing it, all photographs testify to time’s relentless melt.',
      'To photograph people is to violate them, by seeing them as they never see themselves, by having knowledge of them that they can never have; it turns people into objects that can be symbolically possessed. Just as a camera is a sublimation of the gun, to photograph someone is a subliminal murder - a soft murder, appropriate to a sad, frightened time.',
      'Depression is melancholy minus its charms.',
      'The only interesting answers are those which destroy the questions.',
      'Time exists in order that everything doesn’t happen all at once…and space exists so that it doesn’t all happen to you.',
      '10 percent of any population is cruel, no matter what, and 10 percent is merciful, no matter what, and the remaining 80 percent can be moved in either direction.',
      'The likelihood that your acts of resistance cannot stop the injustice does not exempt you from acting in what you sincerely and reflectively hold to be the best interests of your community.',
      'Photographs are a way of imprisoning reality...One can\'t possess reality, one can possess images--one can\'t possess the present but one can possess the past.',
      'A good book is an education of the heart. It enlarges your sense of human possibility what human nature is of what happens in the world. It\'s a creator of inwardness.',
      'The truth is that Mozart, Pascal, Boolean Algebra, Shakespeare, parliamentary government, baroque churches, Newton, the emancipation of women, Kant, Marx, and Balanchine ballets don\'t redeem what this particular civilization has wrought upon the world. The white race is the cancer of human history.',
      'The camera makes everyone a tourist in other people\'s reality, and eventually in one\'s own.',
      'Painters and sculptors under the Nazis often depicted the nude, but they were forbidden to show any bodily imperfections. Their nudes look like pictures in physique magazines: pinups which are both sanctimoniously asexual and (in a technical sense) pornographic, for they have the perfection of a fantasy.',
      'The truth is always something that is told, not something that is known. If there were no speaking or writing, there would be no truth about anything. There would only be what is.',
      'The need for truth is not constant; no more than is the need for repose. An idea which is a distortion may have a greater intellectual thrust than the truth; it may better serve the needs of the spirit, which vary. The truth is balance, but the opposite of truth, which is unbalance, may not be a lie.',
      'In contrast to the asexual chasteness of official communist art, Nazi art is both prurient and idealizing. A utopian aesthetics (physical perfection; identity as a biological given) implies an ideal eroticism: sexuality converted into the magnetism of leaders and the joy of followers. The fascist ideal is to transform sexual energy into a "spiritual" force, for the benefit of the community.',
      'To me, literature is a calling, even a kind of salvation. It connects me with an enterprise that is over 2,000 years old. What do we have from the past? Art and thought. That\'s what lasts. That\'s what continues to feed people and give them an idea of something better. A better state of one\'s feelings or simply the idea of a silence in one\'s self that allows one to think or to feel. Which to me is the same.'
    ]
  }
]

/*
  Generates a random number based on input length
*/ 
const randomNum = function(arr){
  return Math.floor(Math.random() * arr.length);
}

/*
  Selects a random author and quote
*/
const pickAuthor = function(arr){
  const pickAuthor = arr[randomNum(arr)];
  const author = pickAuthor.author;
  const quoteArr = pickAuthor.quote;
  const pickQuote = quoteArr[randomNum(quoteArr)];

  const displayAuthor = document.querySelector(".author p");
  displayAuthor.textContent = author;

  const displayQuote = document.querySelector(".quote p");
  displayQuote.textContent = pickQuote;
}

const newQuote = document.querySelector(".getQuote");
newQuote.addEventListener("click", function(){
  pickAuthor(quotes);
});

/*
  Opens a new window and populates tweet area with quote and author
*/ 
const openTweet =  function (){
  const windowFeature = `height = 500px, width = 450px, 
                          menubar = yes, toolbar = yes, resizable = yes, 
                          location = yes, titlebar = yes, status = yes`;

  let url = "https://twitter.com/intent/tweet?&text=";
  let text = document.querySelector(".quote p").innerText;
  let authorTweet = document.querySelector(".author p").innerText; 
  let tweetUrl = `${url}${text} -${authorTweet}`;
  window.open(tweetUrl,"tweet", windowFeature);
}

const tweet = document.querySelector(".tweet");
tweet.addEventListener("click", openTweet);