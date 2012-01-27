# -*- coding: utf-8 -*-
import json
import codecs
from os.path import exists

# (pasted from the JLU localization script):
s = u'''        // most common tags page 1
        'grammar': '文法',
        'word-choice': '言葉選び',
        'usage': '言葉使い',
        'nuances': 'ニュアンス',
        'vocabulary': '語彙',
        'translation': '翻訳',
        'particles': '不変化詞',
        'kanji': '漢字',
        'verbs': '動詞',
        'words': '言葉',
        'meaning': '意味',
        'etymology': '語源',
        'conjugations': '動詞の活用',
        'politeness': '丁寧さ',
        'pronunciation': '発音',
        'slang': '俗語',
        'synonyms': '同義語',
        'set-phrases': '決まり文句',
        'definitions': '定義',
        'numbers': '数字',
        'readings': '読み',
        'learning': '学び',
        'particle-ni': '助詞「に」', // FIXME
        'culture': '文化',
        'colloquial': '口語',
        'te-form': 'て形', 
        'formal-noun': '固有名詞',
        'dialects': '方言',
        'jlpt': '日本語能力試験',
        'history': '歴史',
        'resources': '参考文献', // CHECK ME!
        'expression': '表現',
        'loanwords': '外来語',
        'adjectives': '形容詞',
        'business-japanese': 'ビジネス日本語',
        // Taken from Chinese Wikipedia, so probably needs correction :P
        //'register': '言語使用場合の領域',
        
        // most common tags page 2
        'honorifics': '敬語', // WARNING!
        'idioms': 'イディオム',
        'contractions': '縮約',
        'keigo': '敬語',
        'orthography': '正字法',
        'syntax': '構文',
        'spelling': 'スペリング',
        'particle-no': '助詞「の」',
        'particle-de': '助詞「で」',
        'negative-forms': '否定形',
        'counter-words': '助数詞',
        'terminology': '専門用語',
        'suffixes': '接尾辞',
        'speaking': '話',
        'tense': '時制',
        'food': '食べ物',
        //'first-person-pronoun': '',
        'hiragana': 'ひらがな',
        'practical': '日常',
        'phonology': '音韻論',
        'kana': 'かな',
        'greetings': '挨拶',
        'i-adjectives': '形容詞',
        //'homophonic-kanji': '',
        'katakana': 'カタカナ',
        'particle-to': '助詞「と」',
        'particle-ga': '助詞「が」',
        'song-lyric': '歌詞',
        'typo': 'タイプミス',
        'particle-wa': '助詞「は」',
        'phrase-requests': '用語要求',
        'adverbs': '副詞',
        'compounds': '複合語',
        'conjunctions': '接続詞',
        'dictionary': '辞書',
        'perspective': '見方',
        
        // most common tags page 3
        'particle-wo': '助詞「を」',
        'nuance': 'ニュアンス',
        'intransitive': '自動詞',
        'computing': 'コンピュータ用語',
        'copula': '連結詞',
        'ellipsis': '省略',
        'internet-slang': 'インターネット俗語',
        'onomatopoeia': '擬音語',
        'phrase': '言い回し',
        'transitive': '他動詞',
        'puns': '駄じゃれ',
        'pronouns': '代名詞',
        'quotes': '引用',
        'questions': '質問',
        'potential-form': '可能形',
        'formality': '形式',
        'chinese': '中国語',
        'ateji': '当て字',
        'passive': '受動態',
        'metaphor': '隠喩',
        'na-adjectives': '形容動詞',
        'name': '名前',
        'romaji': 'ローマ字',
        'time': '時間',
        'wasei-eigo': '和製英語',
        'publishing': '印刷',
        'punctuation': '句読点',
        'obsolete-kana': '変体仮名',
        'interjections': '間投詞',
        'kana-usage': 'かなの使い',
        'particle-na': '助詞「な」',
        'abbreviations': '短縮', // Check me re: ellipsis
        'archaic': '死語', // ???
        'differences': '違い',
        'formation': '形成',
        'stroke-order': '筆順',
        
        // most common tags page 4
        'homonyms': '同音異義語',
        'bikago': '美化語',
        //'clause-pattern': '',
        'demonstratives': '指示詞',
        'part-of-speech': '品詞',
        'pitch-accent': '高低アクセント',
        'okurigana': '送り仮名',
        'particle-ka': '助詞「か」',
        'intonation': 'イントネーション',
        'linguistics': '言語学',
        'relative-clause': '関係詞節',
        'website': 'ウェブサイト',
        //'verse': '',
        'respect': '尊敬',
        'radicals': '部首',
        'single-word-requests': '単独言葉要求', // CHECK ME!
        'mathematics': '数学',
        'language-change': '言語変化',
        'language-reform': '言語改革',
        'nouns': '名詞',
        'particle-e': '助詞「へ」',
        'plurals': '複数',
        'phonetics': '音声学',
        'causative': '使役',
        'animals': '動物',
        'anime': 'アニメ',
        'input-method': '入力方式',
        //'gemination': '',
        'particle-yori': '助詞「より」',
        'machine-translation': '機械翻訳',
        'mnemonics': '記憶を助けるもの',
        'offensive-words': '不快な言葉',
        'direction': '方向',
        'fauna': '動物相',
        'folklore': '民間伝承',
        'email': '電子メール',
        'alphabetical-order': 'アルファベット順',
        'ambiguity': '曖昧さ',
        'comprehension': '理解',
        'colours': '色',
        'comparitive-linguistics': '比較言語学',
        'subject': '主語',
        'tag-question': '付加疑問',
        'rendaku': '連濁',
        'volitional': '意志動詞', // CHECK ME!
        'vowels': '母音'//,'''


def get_tag_count():
    '''
    returns {tagname: number of tags, ...}
    '''
    x = 1
    tag_count = {}
    
    while 1:
        path = 'tags/tags%s.htm' % x
        if not exists(path):
            break
        
        with codecs.open(path, 'rb', 'utf-8') as f:
            text = f.read()
        
        for s in text.split(' rel="tag">')[1:]:
            tag = s.split('</a>')[0].strip() # TODO: unescape!
            
            num_tags = s.split('<span class="item-multiplier">&times;&nbsp;')
            print num_tags
            if len(num_tags) > 1:
                num_tags = int(num_tags[1].split('<')[0])
            else:
                num_tags = 1 # CHECK ME!
            
            tag_count[tag] = num_tags
        x += 1
    
    print tag_count
    return tag_count

tag_count = get_tag_count()


def write_tags():
    data = []
    for line in s.split('\n'):
        line = line.strip().split('//')[0]
        if not line: continue
        line = line.replace("',", "'") 
        line = line.replace("': '", "', '")
        d = json.loads('[%s]' % line.replace("'", '"'))
        data.append(d)
    
    with open('out.txt', 'wb') as f:
        a = []
        for k, v in sorted(data, key=lambda x: tag_count.get(x[0], 0), reverse=True):
            if not k in tag_count:
                continue
            
            a.append('<a href="http://japanese.stackexchange.com/questions/tagged/%s"'
                     ' title="%s">`%s` <sup>%s (%s)</sup></a>'
                     % (k, k, v, k, tag_count.get(k, 0)))
    
        f.write(', '.join(a).encode('utf-8', 'ignore'))


if __name__ == '__main__':
    write_tags()
