var quotes = [
    'I love you the more in that I believe you had liked me for my own sake and for nothing else.  -John Keats', 
    'But man is not made for defeat. A man can be destroyed but not defeated.  -Ernest Hemingway',
    'When you reach the end of your rope, tie a knot in it and hang on.  -Franklin D. Roosevelt',
    'There is nothing permanent except change.  -Heraclitus',
    'You cannot shake hands with a clenched fist.  -Indira Gandhi',
    'Let us sacrifice our today so that our children can have a better tomorrow.  -A. P. J. Abdul Kalam',
    'It is better to be feared than loved, if you cannot be both.  -Niccolo Machiavelli',
    'The most difficult thing is the decision to act, the rest is merely tenacity. The fears are paper tigers. You can do anything you decide to do. You can act to change and control your life; and the procedure, the process is its own reward.  -Amelia Earhart',
    'Do not mind anything that anyone tells you about anyone else. Judge everyone and everything for yourself.  -Henry James',
    'Learning never exhausts the mind.  -Leonardo da Vinci',
    'There is no charm equal to tenderness of heart.  -Jane Austen',
    'All that we see or seem is but a dream within a dream.  -Edgar Allan Poe',
    'Lord, make me an instrument of thy peace. Where there is hatred, let me sow love.  -Francis of Assisi',
    'The only journey is the one within.  -Rainer Maria Rilke',
    'Good judgment comes from experience, and a lot of that comes from bad judgment.  -Will Rogers',
    'Life without love is like a tree without blossoms or fruit.  -Khalil Gibran',
    'Think in the morning. Act in the noon. Eat in the evening. Sleep in the night.  -William Blake',
    'No act of kindness, no matter how small, is ever wasted.  -Aesop',
    'If you cannot do great things, do small things in a great way.  -Napoleon Hill',
    'Independence is happiness.  -Susan B. Anthony',
    'The supreme art of war is to subdue the enemy without fighting.  -Sun Tzu',
    'Keep your face always toward the sunshine - and shadows will fall behind you.  -Walt Whitman',
    'Being entirely honest with oneself is a good exercise.  -Sigmund Freud',
    'Happiness can exist only in acceptance.  -George Orwell',
    'Love has no age, no limit; and no death.  -John Galsworthy',
    'You can\'t blame gravity for falling in love.  -Albert Einstein',
    'There is only one corner of the universe you can be certain of improving, and that\'s your own self.  -Aldous Huxley',
    'Honesty is the first chapter in the book of wisdom.  -Thomas Jefferson',
    'The journey of a thousand miles begins with one step.  -Lao Tzu',
    'The best preparation for tomorrow is doing your best today.  -H. Jackson Brown, Jr.',
    'A new command I give you: Love one another. As I have loved you, so you must love one another.  -Jesus Christ',
    'There are two ways of spreading light: to be the candle or the mirror that reflects it.  -Edith Wharton',
    'Ever tried. Ever failed. No matter. Try Again. Fail again. Fail better.  -Samuel Beckett',
    'Coming together is a beginning; keeping together is progress; working together is success.  -Henry Ford',
    'Not all those who wander are lost.  -J.R.R.Tolkien',
    'Whoever is happy will make others happy too.  -Anne Frank',
    'I have not failed. I\'ve just found 10,000 ways that won\'t work.  -Thomas A. Edison',
    'There is nothing on this earth more to be prized than true friendship.  -Thomas Aquinas',
    'A leader is one who knows the way, goes the way, and shows the way.  -John C. Maxwell',
    'Very little is needed to make a happy life; it is all within yourself, in your way of thinking.  -Marcus Aurelius',
    'There is only one happiness in this life, to love and be loved.  -George Sand',
    'If opportunity doesn\'t knock, build a door.  -Milton Berle',
    'The secret of getting ahead is getting started.  -Mark Twain',
    'Let us be grateful to people who make us happy, they are the charming gardeners who make our souls blossom.  -Marcel Proust',
    'Always remember that you are absolutely unique. Just like everyone else.  -Margaret Mead',
    'Wise men speak because they have something to say; Fools because they have to say something.  -Plato',
    'If your actions inspire others to dream more, learn more, do more and become more, you are a leader.  -John Quincy Adams',
    'When we are no longer able to change a situation - we are challenged to change ourselves.  -Viktor E. Frankl',
    'Problems are not stop signs, they are guidelines.  -Robert H. Schuller',
    'We love life, not because we are used to living but because we are used to loving.  -Friedrich Nietzsche',
    'A single rose can be my garden... a single friend, my world.  -Leo Buscaglia',
    'Friends show their love in times of trouble, not in happiness.  -Euripides',
    'Life is not a problem to be solved, but a reality to be experienced.  -Soren Kierkegaard',
    'Life isn\'t about finding yourself. Life is about creating yourself.  -George Bernard Shaw',
    'The only true wisdom is in knowing you know nothing.  -Socrates',
    'Everything has beauty, but not everyone sees it.  -Confucius',
    'A kiss is a lovely trick designed by nature to stop speech when words become superfluous.  -Ingrid Bergman',
    'For it was not into my ear you whispered, but into my heart. It was not my lips you kissed, but my soul.  -Judy Garland',
    'If you live to be a hundred, I want to live to be a hundred minus one day so I never have to live without you.  -A. A. Milne',
    'As we express our gratitude, we must never forget that the highest appreciation is not to utter words, but to live by them.  -John F. Kennedy',
    'Believe you can and you\'re halfway there.  -Theodore Roosevelt',
    'Today you are you! That is truer than true! There is no one alive who is you-er than you!  -Dr. Seuss',
    'Education is the most powerful weapon which you can use to change the world.  -Nelson Mandela',
    'Change your thoughts and you change your world.  -Norman Vincent Peale',
    'In three words I can sum up everything I\'ve learned about life: it goes on.  -Robert Frost',
    'Love isn\'t something you find. Love is something that finds you.  -Loretta Young',
    'Do all things with love.  -Og Mandino',
    'Success is not final, failure is not fatal: it is the courage to continue that counts.  -Winston Churchill',
    'Do not go where the path may lead, go instead where there is no path and leave a trail.  -Ralph Waldo Emerson',
    'Love is composed of a single soul inhabiting two bodies.  -Aristotle',
    'Where there is love there is life.  -Mahatma Gandhi',
    'One of the most beautiful qualities of true friendship is to understand and to be understood.  -Lucius Annaeus Seneca',
    'The only thing necessary for the triumph of evil is for good men to do nothing.  -Edmund Burke',
    'Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.  -Buddha',
    'Don\'t judge each day by the harvest you reap but by the seeds that you plant.  -Robert Louis Stevenson',
    'Nothing is impossible, the word itself says \'I\'m possible\'!  -Audrey Hepburn',
    'Find a place inside where there\'s joy, and the joy will burn out the pain.  -Joseph Campbell',
    'Try to be a rainbow in someone\'s cloud.  -Maya Angelou',
    'It is during our darkest moments that we must focus to see the light.  -Aristotle',
    'Keep love in your heart. A life without it is like a sunless garden when the flowers are dead.  -Oscar Wilde',
    'The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.  -Helen Keller',
    'It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends.  -J.K. Rowling',
    'Happiness can be found even in the darkest of times if only one remembers to turn on the light.  -J.K. Rowling',
    'Don\'t let the muggles get you down.  -Ronald Weasley'
];

function newQuote() {
    
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
    
}




















