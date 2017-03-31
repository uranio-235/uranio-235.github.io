# cualqueir duda, échale un vistazo al plugin de image_tag.rb
module Jekyll
  class GineteoTag < Liquid::Tag
    def render(context)
       return rand( 0.03 .. 0.09).round(2)
    end
  end
end
Liquid::Template.register_tag('rand', Jekyll::GineteoTag)
