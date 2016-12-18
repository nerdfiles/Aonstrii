# Aonstrii

## Install

    $ git clone https://gitlab.com/nerdfiles/Aonstrii/
    $ cd Aonstrii
    $ npm install

## Usage

    $ node index.js search <termType> <searchTerm>
    $ torsocks node index.js search <termType> <searchTerm>

## Ideas

1. Use proofbot to build a proofboat to load to a markov chain.  
   1.1. Take a list of all articles of the day about Subject via ddg searches.  
   1.2. Store internal chains as threads.  
   1.2. Use fwp to build phrases from threads of N length.  
   1.3. When Subject posts about randomized embedded concept, reply with source phrase as interrogative.  

Example of phrases built from N length chain.

    @subject says: "We released the documents."
    @aonstrii replies: "Is deemed second medical happening provided to consumers released registered address doctor volume?"
    @subject says: "It was a bipartisan success!"
    @aonstrii replies: "Is comparison specifically exchanged believed without recently retained unaffordable referred delivery relative to system?"

The idea here is that the phrase can be used to map key clauses like names 
of Legislation, etc. that a particular person may want to whitelist. So one
could generally treat a tweet, for instance, as a channel to generate bot
replies which can be reduced to phrase items. If the subject pivots a topic
in their main timeline, the bot might "pay or punish" them in a previous
thread based on the subset of words pertaining to propositional attitudes. So,
if the subject "affirms," or "supports," or used operative language about an
existing legislation, we can capture the pivot assuming that query in 1.1
confirms the continuity of the opinion (if any propositional attitude
adjustment) because the probability of the attitude should obey a logarithmic
growth within the coarse of all planned actions on behalf of the subject.

Someone might mention something yet over time if it is indeed a cause that is
gaining ground, the growth of its use in language will be logarithmic, as 
opposed to something like a Pareto diffusion. Imagine a new music event 
at a particular place: if many people actually plan on attending, the
mention of that event will increase throughout the population with a steady 
growth, assuming word of mouth, etc. If there's any spike in activity, or say
automation, this would break with a logarithmic growth. But we still want to
make sure the mention of the event does not become more sparse over time. If
someone mentions an event but never talks of it again after the initial
instance, that original speech act signals but does not reinforce. We are
looking for reinforcement language from the subject, and its frequency.
What causes such diffusions, and what from an engagement standpoint can be
done through tweets-as-a-channel can be done to motivate the discussion or
reorient it to ensure that a maximization of growth of the topic's signal
is achieved? Generally if the topic or issue is on track. It's similar to
the telephone game: the original message will regularly lose its original
terms in a wisdom-of-crowds moment, or a social event of transference. But
if the original message is effective, its original terms should increase
in usage throughout the population with regular growth. So, growth and decay
can be tracked to modify the bot's reinforcement of a backpropagationed
probability signal of the original message.
