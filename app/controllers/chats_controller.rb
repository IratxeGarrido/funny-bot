class ChatsController < ApplicationController
  def index
    @state = "start"
    @jokes = {
      'pun' => ['Why did Adele cross the road? To say hello form the other side.',
                'To the guy who invented zero, thanks for nothing.',
                'Can February March? No, but April May.',
                'Why was Dumbo sad? He felt irrelephant.'],
      'programming' => ['What do you call a programmer from Finland? Nerdic.',
                        'What did the Java Code say to the C code? You’ve got no class.',
                        'Why do programmers prefer dark mode? Because light attracts bugs.',
                        "Things aren't always #000000 and #FFFFFF"],
      'dad jokes' => ['What do you call a fish wearing a bowtie? Sofishticated.',
                      'How does the moon cut his hair? Eclipse it.',
                      'Where do fruits go on vacation? Pear-is!',
                      "Where do boats go when they're sick? To the boat doc."]
    }

  end
end
