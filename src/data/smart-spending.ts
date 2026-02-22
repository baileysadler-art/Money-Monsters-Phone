import { Lesson } from '@/types';

export const smartSpendingLessons: Lesson[] = [
  // ─── Lesson 0: Comparing Prices ───────────────────────────────────────
  {
    id: 'smart-spending-0',
    trackId: 'smart-spending',
    index: 0,
    title: 'Comparing Prices',
    description: 'Learn how to find the best deal by comparing prices before you buy.',
    xpReward: 20,
    screens: [
      // Screen 1 — Content
      {
        type: 'content',
        title: 'Why Compare Prices?',
        body: 'Imagine you want to buy a new water bottle. Shop A sells it for £8, Shop B sells the same one for £6, and Shop C has it for £10. If you buy from Shop B, you save £2 compared to Shop A and £4 compared to Shop C!\n\nComparing prices means looking at how much the same item costs in different places before you decide where to buy it. This is one of the simplest ways to keep more money in your pocket — even the cleverest Money Monster knows that trick!',
      },
      // Screen 2 — Quiz: multiple-choice
      {
        type: 'multiple-choice',
        variants: {
          easy: {
            question: 'A toy costs £5 at one shop and £3 at another. Which shop has the better deal?',
            options: [
              { id: 'a', text: 'The £3 shop' },
              { id: 'b', text: 'The £5 shop' },
              { id: 'c', text: 'They are the same' },
            ],
            correctAnswer: 'a',
            explanation: 'The £3 shop is cheaper, so you save £2 by shopping there! A savvy Money Monster always hunts for the best price.',
          },
          medium: {
            question: 'A pack of markers costs £4.50 online and £6.00 at a local shop. How much would you save buying online?',
            options: [
              { id: 'a', text: '£1.00' },
              { id: 'b', text: '£1.50' },
              { id: 'c', text: '£2.50' },
            ],
            correctAnswer: 'b',
            explanation: '£6.00 minus £4.50 equals £1.50. You save £1.50 by buying online — more pennies for your Money Monster stash!',
          },
          hard: {
            question: 'Shop A sells a notebook for £3.00 each, and Shop B sells a 3-pack for £7.50. Which option gives you a lower price per notebook?',
            options: [
              { id: 'a', text: 'Shop A at £3.00 each' },
              { id: 'b', text: 'Shop B at £2.50 each' },
              { id: 'c', text: 'Both are the same price per notebook' },
            ],
            correctAnswer: 'b',
            explanation: 'Shop B charges £7.50 for 3 notebooks, which is £7.50 / 3 = £2.50 each. That is 50p less per notebook than Shop A. A true Money Monster spots the better unit price!',
          },
        },
      },
      // Screen 3 — Content
      {
        type: 'content',
        title: 'Tips for Comparing Prices',
        body: 'Here are some smart ways to compare prices:\n\n1. Check the unit price — this tells you the cost per item or per gram, making it easy to compare different package sizes.\n\n2. Look at more than one shop — prices can vary a lot between shops, websites, and apps.\n\n3. Watch out for hidden costs — delivery fees or extra charges can make a "cheap" item more expensive than it looks.\n\n4. Wait for sales — sometimes patience pays off! An item on sale next week could save you a lot. Even Money Monsters know good things come to those who wait!',
      },
      // Screen 4 — Quiz: true-false
      {
        type: 'true-false',
        variants: {
          easy: {
            question: 'You should always buy the first thing you see without checking other shops.',
            options: [
              { id: 'true', text: 'True' },
              { id: 'false', text: 'False' },
            ],
            correctAnswer: 'false',
            explanation: 'It is smart to check a few shops first. You might find the same item for less money somewhere else — and that makes any Money Monster smile!',
          },
          medium: {
            question: 'A lower unit price usually means you are getting a better deal.',
            options: [
              { id: 'true', text: 'True' },
              { id: 'false', text: 'False' },
            ],
            correctAnswer: 'true',
            explanation: 'The unit price tells you the cost per single item or measurement. A lower unit price means you pay less for each unit, which is usually the better deal.',
          },
          hard: {
            question: 'An item priced at £5 with free delivery is always cheaper than the same item priced at £4 with £2 delivery.',
            options: [
              { id: 'true', text: 'True' },
              { id: 'false', text: 'False' },
            ],
            correctAnswer: 'true',
            explanation: 'The total cost of the first option is £5, while the second option totals £6 (£4 + £2 delivery). Free delivery can make a higher sticker price the better deal. A Money Monster always checks the total!',
          },
        },
      },
      // Screen 5 — Quiz: tap-match
      {
        type: 'tap-match',
        variants: {
          easy: {
            question: 'Match each shopping tip to what it means.',
            matchPairs: [
              { left: 'Compare prices', right: 'Look at costs in different shops' },
              { left: 'Wait for a sale', right: 'Buy when the price goes down' },
              { left: 'Check the total', right: 'Add up all costs before buying' },
            ],
            correctAnswer: 'all',
            explanation: 'Comparing prices, waiting for sales, and checking totals are all great ways to spend your money wisely — like a true Money Monster!',
          },
          medium: {
            question: 'Match each term with its correct definition.',
            matchPairs: [
              { left: 'Unit price', right: 'Cost per single item or gram' },
              { left: 'Bulk buying', right: 'Purchasing more to save per item' },
              { left: 'Delivery fee', right: 'Extra charge for posting an order' },
              { left: 'Discount', right: 'A reduction in the original price' },
            ],
            correctAnswer: 'all',
            explanation: 'Understanding these terms helps you figure out the true cost of what you are buying. Knowledge is a Money Monster\'s superpower!',
          },
          hard: {
            question: 'Match each comparison strategy with the scenario where it works best.',
            matchPairs: [
              { left: 'Price per unit', right: 'Comparing different-sized packages' },
              { left: 'Total cost with delivery', right: 'Buying from an online shop' },
              { left: 'Voucher stacking', right: 'Combining multiple discounts' },
              { left: 'Price matching', right: 'Asking a shop to match a competitor' },
            ],
            correctAnswer: 'all',
            explanation: 'Different strategies work best in different situations. A smart Money Monster picks the right tool for each purchase.',
          },
        },
      },
      // Screen 6 — Quiz: fill-blank
      {
        type: 'fill-blank',
        variants: {
          easy: {
            question: 'Before you buy something, you should ___ the prices at different shops.',
            options: [
              { id: 'a', text: 'compare' },
              { id: 'b', text: 'ignore' },
              { id: 'c', text: 'forget' },
            ],
            correctAnswer: 'a',
            explanation: 'Comparing prices helps you find the best deal and save money. Every Money Monster loves a bargain!',
          },
          medium: {
            question: 'The ___ price tells you how much one single unit of an item costs.',
            options: [
              { id: 'a', text: 'total' },
              { id: 'b', text: 'unit' },
              { id: 'c', text: 'sale' },
            ],
            correctAnswer: 'b',
            explanation: 'The unit price breaks down the cost per item, gram, or other measurement so you can compare different sizes easily.',
          },
          hard: {
            question: 'When comparing online prices, you must also account for ___ fees to determine the true total cost.',
            options: [
              { id: 'a', text: 'membership' },
              { id: 'b', text: 'delivery' },
              { id: 'c', text: 'subscription' },
            ],
            correctAnswer: 'b',
            explanation: 'Delivery fees can make a seemingly cheap online price more expensive than buying locally. Always add delivery to get the true total cost — a Money Monster never forgets hidden charges!',
          },
        },
      },
    ],
  },

  // ─── Lesson 1: Needs Before Wants ─────────────────────────────────────
  {
    id: 'smart-spending-1',
    trackId: 'smart-spending',
    index: 1,
    title: 'Needs Before Wants',
    description: 'Discover how to tell the difference between needs and wants, and why needs come first.',
    xpReward: 20,
    screens: [
      // Screen 1 — Content
      {
        type: 'content',
        title: 'Needs vs. Wants',
        body: 'A need is something you must have to live and stay healthy — like food, water, clothes, and a place to live. A want is something nice to have but you can live without — like video games, sweets, or the newest trainers.\n\nSmart spenders take care of their needs first, then use leftover money for wants. This way, the important stuff is always covered! Even the wildest Money Monster knows: needs come first!',
      },
      // Screen 2 — Quiz: multiple-choice
      {
        type: 'multiple-choice',
        variants: {
          easy: {
            question: 'Which of these is a need?',
            options: [
              { id: 'a', text: 'Food' },
              { id: 'b', text: 'A toy robot' },
              { id: 'c', text: 'A video game' },
            ],
            correctAnswer: 'a',
            explanation: 'Food is something your body needs to survive. Toys and video games are fun, but they are wants. A Money Monster fuels up on needs first!',
          },
          medium: {
            question: 'Maya has £20. She needs new socks (£8) and wants a comic book (£12). What should she buy first?',
            options: [
              { id: 'a', text: 'The comic book because it costs more' },
              { id: 'b', text: 'The socks because they are a need' },
              { id: 'c', text: 'Both at the same time' },
            ],
            correctAnswer: 'b',
            explanation: 'Socks are a clothing need. Maya should buy socks first and then see if she has enough left for the comic book (£20 - £8 = £12 left — she can get both!). Smart Money Monster thinking!',
          },
          hard: {
            question: 'A family has £500 for the month. Rent is £300, groceries are £120, and a streaming subscription is £15. After covering needs, how much is left for wants?',
            options: [
              { id: 'a', text: '£65' },
              { id: 'b', text: '£80' },
              { id: 'c', text: '£95' },
            ],
            correctAnswer: 'b',
            explanation: 'Rent (£300) and groceries (£120) are needs totalling £420. £500 - £420 = £80 left for wants like the streaming subscription and other extras.',
          },
        },
      },
      // Screen 3 — Content
      {
        type: 'content',
        title: 'Making a Spending Plan',
        body: 'One great trick is to make a simple list before you spend money:\n\n1. Write down everything you need to buy.\n2. Write down everything you want to buy.\n3. Add up the cost of your needs first.\n4. See how much money is left over.\n5. Pick your favourite wants that fit in the leftover budget.\n\nThis quick plan keeps you from spending too much on wants and running out of money for the things you actually need. Think of it as your Money Monster battle plan!',
      },
      // Screen 4 — Quiz: true-false
      {
        type: 'true-false',
        variants: {
          easy: {
            question: 'A new toy is a need.',
            options: [
              { id: 'true', text: 'True' },
              { id: 'false', text: 'False' },
            ],
            correctAnswer: 'false',
            explanation: 'A new toy is a want, not a need. Needs are things like food, water, and clothing that you must have to live. A wise Money Monster knows the difference!',
          },
          medium: {
            question: 'Making a list of needs and wants before shopping can help you spend wisely.',
            options: [
              { id: 'true', text: 'True' },
              { id: 'false', text: 'False' },
            ],
            correctAnswer: 'true',
            explanation: 'A list helps you plan your spending so you cover important needs first and avoid overspending on wants.',
          },
          hard: {
            question: 'Whether something is a need or a want can sometimes depend on the situation.',
            options: [
              { id: 'true', text: 'True' },
              { id: 'false', text: 'False' },
            ],
            correctAnswer: 'true',
            explanation: 'Context matters. For example, a bicycle might be a want for fun, but if it is your only way to get to school, it becomes more of a need. A clever Money Monster always considers the bigger picture.',
          },
        },
      },
      // Screen 5 — Quiz: tap-match
      {
        type: 'tap-match',
        variants: {
          easy: {
            question: 'Sort each item into needs or wants.',
            matchPairs: [
              { left: 'Water', right: 'Need' },
              { left: 'Sweets', right: 'Want' },
              { left: 'Warm coat', right: 'Need' },
            ],
            correctAnswer: 'all',
            explanation: 'Water and a warm coat keep you alive and safe — those are needs. Sweets are tasty but you can live without them — that is a want. A Money Monster chooses needs first!',
          },
          medium: {
            question: 'Match each item to whether it is a need or a want.',
            matchPairs: [
              { left: 'School supplies', right: 'Need' },
              { left: 'Latest smartphone', right: 'Want' },
              { left: 'Healthy groceries', right: 'Need' },
              { left: 'Designer rucksack', right: 'Want' },
            ],
            correctAnswer: 'all',
            explanation: 'School supplies and healthy groceries are essential. A fancy phone or designer rucksack might be nice, but basic alternatives work just as well.',
          },
          hard: {
            question: 'Match each spending scenario to the correct priority level.',
            matchPairs: [
              { left: 'Paying rent on time', right: 'Top priority need' },
              { left: 'Buying a birthday gift', right: 'Important want' },
              { left: 'Saving for emergencies', right: 'High priority need' },
              { left: 'Upgrading your phone', right: 'Low priority want' },
            ],
            correctAnswer: 'all',
            explanation: 'Rent and emergency savings are critical needs. A birthday gift is a meaningful want, while a phone upgrade can usually wait. A Money Monster ranks spending by importance!',
          },
        },
      },
      // Screen 6 — Quiz: fill-blank
      {
        type: 'fill-blank',
        variants: {
          easy: {
            question: 'Things you must have to live, like food and water, are called ___.',
            options: [
              { id: 'a', text: 'needs' },
              { id: 'b', text: 'wants' },
              { id: 'c', text: 'treats' },
            ],
            correctAnswer: 'a',
            explanation: 'Needs are the essentials you must have to survive, like food, water, shelter, and clothing.',
          },
          medium: {
            question: 'A smart spender pays for ___ before spending on wants.',
            options: [
              { id: 'a', text: 'toys' },
              { id: 'b', text: 'needs' },
              { id: 'c', text: 'games' },
            ],
            correctAnswer: 'b',
            explanation: 'Covering your needs first makes sure the important things are taken care of, and then you can enjoy wants with the money left over. That is the Money Monster way!',
          },
          hard: {
            question: 'Creating a ___ helps you organise your spending by listing needs and wants before you shop.',
            options: [
              { id: 'a', text: 'wish list' },
              { id: 'b', text: 'budget' },
              { id: 'c', text: 'receipt' },
            ],
            correctAnswer: 'b',
            explanation: 'A budget is a plan for your money that helps you allocate funds to needs first and then decide which wants fit within what is left over.',
          },
        },
      },
    ],
  },

  // ─── Lesson 2: Avoiding Impulse Buying ────────────────────────────────
  {
    id: 'smart-spending-2',
    trackId: 'smart-spending',
    index: 2,
    title: 'Avoiding Impulse Buying',
    description: 'Learn how to think before you buy so you do not waste money on things you do not really need.',
    xpReward: 20,
    screens: [
      // Screen 1 — Content
      {
        type: 'content',
        title: 'What Is Impulse Buying?',
        body: 'Impulse buying means purchasing something without planning to — usually because it catches your eye or you feel excited in the moment. Have you ever grabbed sweets at the till even though you were not hungry? That is impulse buying!\n\nShops are designed to tempt you with colourful displays, limited-time offers, and items placed right at eye level. Knowing these tricks can help you stay in control of your money — and keep your inner Money Monster from going wild!',
      },
      // Screen 2 — Quiz: true-false
      {
        type: 'true-false',
        variants: {
          easy: {
            question: 'Impulse buying means you planned to buy the item before you saw it.',
            options: [
              { id: 'true', text: 'True' },
              { id: 'false', text: 'False' },
            ],
            correctAnswer: 'false',
            explanation: 'Impulse buying is the opposite of planning. It means you buy something suddenly just because you saw it and wanted it right away. A smart Money Monster always has a plan!',
          },
          medium: {
            question: 'Shops place small, tempting items near the till to encourage impulse purchases.',
            options: [
              { id: 'true', text: 'True' },
              { id: 'false', text: 'False' },
            ],
            correctAnswer: 'true',
            explanation: 'Shops know you are waiting in the queue with nothing to do, so they put sweets, chewing gum, and small toys near the till hoping you will add them to your basket.',
          },
          hard: {
            question: 'Limited-time offers always represent genuine savings and should be purchased immediately.',
            options: [
              { id: 'true', text: 'True' },
              { id: 'false', text: 'False' },
            ],
            correctAnswer: 'false',
            explanation: 'Many "limited-time" deals create artificial urgency. The sale price may not actually be lower than normal, or the item may go on sale again soon. Always evaluate whether you truly need the item — that is the Money Monster mindset!',
          },
        },
      },
      // Screen 3 — Content
      {
        type: 'content',
        title: 'The 24-Hour Rule',
        body: 'One of the best tools to beat impulse buying is the 24-hour rule: when you see something you want, wait a full day before buying it.\n\nDuring that time, ask yourself these questions:\n- Do I really need this, or do I just want it right now?\n- Will I still want it tomorrow?\n- Do I have enough money after covering my needs?\n- Is there something else I would rather save for?\n\nIf you still want it after 24 hours and you can afford it, go ahead! You will feel great knowing it was a thoughtful decision, not a rushed one. That is a Money Monster power move!',
      },
      // Screen 4 — Quiz: multiple-choice
      {
        type: 'multiple-choice',
        variants: {
          easy: {
            question: 'What should you do when you see something you want to buy right away?',
            options: [
              { id: 'a', text: 'Buy it immediately' },
              { id: 'b', text: 'Wait and think about it first' },
              { id: 'c', text: 'Ask a friend to buy it for you' },
            ],
            correctAnswer: 'b',
            explanation: 'Waiting and thinking gives you time to decide if you really want or need the item. This helps you avoid wasting money — every Money Monster loves saving!',
          },
          medium: {
            question: 'Liam sees a cool skateboard for £30. He has £40 saved but is also saving for a £25 book he needs for school. What is the smartest choice?',
            options: [
              { id: 'a', text: 'Buy the skateboard now since he has enough money' },
              { id: 'b', text: 'Wait 24 hours and remember he needs the school book first' },
              { id: 'c', text: 'Buy both and figure out money later' },
            ],
            correctAnswer: 'b',
            explanation: 'Using the 24-hour rule, Liam would remember the school book (£25) is a need. After buying it, he would have £15 left — not enough for the skateboard. Waiting saved him from a bad decision!',
          },
          hard: {
            question: 'A shop advertises "Buy 2 Get 1 Free" on snacks. Each snack costs £4. You only need one snack. What is the most financially responsible action?',
            options: [
              { id: 'a', text: 'Buy 3 because you get one free — it is a deal' },
              { id: 'b', text: 'Buy just the 1 snack you need for £4' },
              { id: 'c', text: 'Buy 6 to get 2 free' },
            ],
            correctAnswer: 'b',
            explanation: 'Buying 1 snack costs £4. The "deal" costs £8 for 3 snacks. If you only need one, spending £8 instead of £4 is not saving money — it is spending double on things you do not need. A Money Monster sees through that trick!',
          },
        },
      },
      // Screen 5 — Quiz: fill-blank
      {
        type: 'fill-blank',
        variants: {
          easy: {
            question: 'Before buying something, you should ___ about it first.',
            options: [
              { id: 'a', text: 'think' },
              { id: 'b', text: 'forget' },
              { id: 'c', text: 'cry' },
            ],
            correctAnswer: 'a',
            explanation: 'Thinking before you buy helps you decide if you really need or want the item and if you can afford it. A Money Monster always thinks first!',
          },
          medium: {
            question: 'The ___-hour rule says you should wait a full day before making an unplanned purchase.',
            options: [
              { id: 'a', text: '12' },
              { id: 'b', text: '24' },
              { id: 'c', text: '48' },
            ],
            correctAnswer: 'b',
            explanation: 'The 24-hour rule gives you a full day to cool down and decide whether you truly want or need the item before spending your money.',
          },
          hard: {
            question: 'Retailers use tactics like limited-time sales and product ___ to trigger impulse purchases from shoppers.',
            options: [
              { id: 'a', text: 'placement' },
              { id: 'b', text: 'returns' },
              { id: 'c', text: 'warranties' },
            ],
            correctAnswer: 'a',
            explanation: 'Product placement — putting tempting items at eye level, near tills, or at the end of aisles — is a deliberate strategy designed to encourage unplanned buying. A Money Monster spots these tactics a mile away!',
          },
        },
      },
      // Screen 6 — Quiz: tap-match
      {
        type: 'tap-match',
        variants: {
          easy: {
            question: 'Match each action to whether it is smart spending or impulse buying.',
            matchPairs: [
              { left: 'Waiting before buying', right: 'Smart spending' },
              { left: 'Grabbing sweets at the till', right: 'Impulse buying' },
              { left: 'Making a shopping list', right: 'Smart spending' },
            ],
            correctAnswer: 'all',
            explanation: 'Waiting and making a list are smart moves. Grabbing sweets just because you see them is a classic impulse buy — do not let your Money Monster get tricked!',
          },
          medium: {
            question: 'Match each impulse-buying trigger with the right strategy to resist it.',
            matchPairs: [
              { left: 'Eye-catching display', right: 'Stick to your shopping list' },
              { left: 'Limited-time sale sign', right: 'Use the 24-hour rule' },
              { left: 'Friend says you should buy it', right: 'Ask yourself if you really need it' },
              { left: 'Till counter snacks', right: 'Look away and stay focused' },
            ],
            correctAnswer: 'all',
            explanation: 'Each trigger has a counter-strategy. Lists, waiting, self-reflection, and focus all help you resist impulse spending. A Money Monster stays strong!',
          },
          hard: {
            question: 'Match each psychological pricing tactic to its description.',
            matchPairs: [
              { left: 'Anchoring', right: 'Showing a high original price next to a sale price' },
              { left: 'Scarcity', right: 'Claiming only a few items are left in stock' },
              { left: 'Loss aversion', right: 'Making you fear missing out on a deal' },
              { left: 'Decoy pricing', right: 'Adding an option to make another look like a bargain' },
            ],
            correctAnswer: 'all',
            explanation: 'These are real marketing tactics used to push consumers towards buying. Recognising them helps you make rational purchasing decisions instead of emotional ones — the ultimate Money Monster skill!',
          },
        },
      },
    ],
  },
];
