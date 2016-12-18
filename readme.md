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
