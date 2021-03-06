var rnd = function(min, max) {
  return Math.floor( Math.random() * (max - min) ) + min;
};
var rndListItem = function(array){
  return array[rnd(0,array.length)];
};

var actions = {
    object:function(){
      return rndListItem([
        "חתול",
        "רוצח",
        "דרוזי",
        "רובוט",
        "טיפש",
        "ילד",
        "תפוח",
        "משולש",
        "חרגול",
        "סלע",
        "שיר",
        "אורח",
        "אורי",
        "מאמר",
        "זרובבל",
        "זנב",
        "סנאי",
        "מתנקש",
        "שיר",
        "מרגול",
        "קוקטייל",
        "טורטוליני",
        "בולונז",
        "חציל",
        "חציל עציל"
      ]);
    },
    adobj:function(){
      return rndListItem([
        "חתולי",
        "מת",
        "דרוזי",
        "רובוט",
        "משעמם",
        "מעויין",
        "מלבני",
        "בצורת משולש רולו",
        "טיפש",
        "עם משקפיים",
        "גאון",
        "קוונטי",
        "מרנין",
        "קדוש",
        "מזויף",
        "פמיניסטי",
        "מורעל",
        "יפייפה כמו גרגמל תחת אור השמש השנייה",
        "מוסגר",
        "מאזניים",
        "אילומינייטיב",
        "דובר האילומינטי",
        "בסגנון בנסקי",
        "בסגנון ליפשיץ",
        "בסגנון מיכל ליפשיץ",
        "בסגנון המאזניים שסחף את כל החוף הדרום צפוני",
        "במאמר מוסגר",
        "כמו מאמר מוסגר",
        "מוסגר כמאמר",
        "תומך בפטריארכיה",
        "סגול",
        "אפוי",
        "ירוק זוהר"
      ]);
    },
    witha:function(){
      return rndListItem([
        "",
        "עם נוצות עליו ",
        "מלא בפרווה ",
        "וגם יוסי ",
        "עם משקפיים ",
        "בחסות מירי בוהדנה ",
        "עם הרבה מיץ ביוב, בריא לבריאות ",
        "במיוחד ",
        "מאוד ",
        "מפרוות מאמרים מוסגרים אורגינל בנסקי ",
        "בהשראת ישו המשיח הגדול ",
        "וגם נמריה ",
        "עם שמלת ערב ",
        "מלא בנצנצים ",
        "מלא בנסנסים ",
        "עם שמנת חמוצה ",
        "עם יאקוזה ",
        "בחסות מרגול ",
        "משבט החצילים ",
        "משבט הפרציפלוחות "
      ]);
    },
    madeBy:function(){
      return rndListItem([
        "שנוצר על ידי צוות מדענים סינים",
        "שנבנה בחסות מירי בוהדנה והרובוטים",
        "שכל הרווחים ממנו יעברו למען שימור מין הפרציפלוחות אך גם הפרציפלוחים",
        "שנוצר על ידי האילומינטי",
        "שנוצר על ידי ממשלת ארצות הברית והחייזרים",
        "שאוהב אתכם כמו שגרגמל אוהב את הדרדסים",
        "שנבנה בחסות שרגא והישועים",
        "שנבנה למען שלומציון המספרת וחבריה הטובים",
        "שנוצר על ידי צ'אק נוריס, חיה וחברים"
      ]);
    },
    whileThey:function(){
      return rndListItem([
        "תוך כדי שהם צפו ב",
        "שאוכלים ",
        "שמרגלים אחרי ",
        "שאוהבים בסתר איזה ",
        "שהם בעצם בדמיון של ",
        "שמהופנטים על ידי ",
        "שרוצים להפוך לארכי"
      ]);
    },
    because:function(){
      return rndListItem([
        "כדי לנסות להביא סוף למלריה",
        "כדי שהרובוט העליון יהיה שמח",
        "כדי שישו יחזור",
        "כדי לגרום לביאת המשיח",
        "כדי לשמח אותם",
        "כי זה מצחיק מאוד",
        "כדי להציל את העולם",
        "כדי להשתלט על העולם",
        "כדי להרוג את הפטריארכיה",
        "כדי שזה יהיה טעים במיוחד",
        "כדי לרצות את רצונות המפיק",
        "כדי להעיר את רוח המפיק שבין כפות המאזניים של החיה",
        "כדי אנשים יתרמו יותר כסף לג'וינט",
        "כדי לחגוג את יום העצמאות של איי שלמה"
      ]);
    },
    but:function(){
      return rndListItem([
        "למרות שהמלריה עוד לא התחילה",
        "אבל בסוף התברר שהוא היה רק אשלייה",
        "למרות שהוא בכלל חייזר רב-מימדי עם "+rnd(10,35)+" זרועות ו-"+rnd(10,120)+" פרציפלוחות",
        "אך כל המציאות הייתה רק חלום שלו",
        "אבל זה לא עבד",
        "ולמרות הציפיות זה לא מצחיק בכלל",
        "אבל הם בטעות השמידו את היקום כולו",
        "וזה עבד מעולה, רק שהם חיו בתוך קונספירציה ענקית של האילומינטי כל הזמן הזה",
        "אבל זה יצא מגעיל מאוד",
        "אך ישו אמר להם שזה רע מאוד",
        "אך הגננת אמרה להם שזה לא יפה וביקשה מהם בנימוס להתנצל",
        "אך התרחשה תאונה וכולם מתו",
        "אבל זה לא נשמע טוב",
        "נגיד.",
        "אבל המפיק הגדול השמיד הכל"
      ]);
    },
    voice:function(){
      return rndListItem([
        "ואז היא אמרה",
        "ואז הוא אמר",
        "ואז נשמע קול מיסתורי",
        "וכולם ידעו בליבם כי",
        "ומאז כולם יודעים ש",
      ]);
    },
    objes:function(){
      return rndListItem([
        "ישועים",
        "מוסלמים",
        "יצורים עליונים",
        "חתולים",
        "אנשים גבוהים",
        "אנשים נמוכים",
        "מחוננים",
        "מחונחנים",
        "חנונים",
        "הילד שיצר את הדבר הזה וחבריו",
        "מאזניים"
      ]);
    },
    objes_adobjs:function(){
      return rndListItem([
        "הם תמיד",
        "הם מאוד",
        "הם אף פעם לא",
        "וזה תמיד נכון, הם",
        "הם",
        "הם תמיד, אבל תמיד",
        "הם אף פעם, אבל אף פעם לא"
      ]);
    },
    adobjs:function(){
      return rndListItem([
        "טיפשים",
        "נוטים להתפוצץ",
        "מיוחדים",
        "שונים",
        "חולים במחלת המלריה",
        "מאמינים אדוקים",
        "מתפללים לנמריה",
        "מקדשים את קדושת נמריה",
        "מהללים את נמריה",
        "רואים את השמש השנייה",
        "חובבי גרגמל",
        "פרציפלוחות",
        "נשמעים טוב",
        "זה שם תואר, נגיד. ואני צריך להכניס אותו, נגיד. וזה לא נשמע טוב, נגיד."
      ]);
    },
    butSome:function(){
      return rndListItem([
        "אבל מעטים יחלקו על תודעה זו בגלל שהם מאמינים בפילוסופיה ה",
        "כה אמרה האישה ה",
        "לעומת זאת ישנן גישות שמתנגדות לכך כמו הגישה ה",
        "למרות שזה לא נשמע טוב לפי המכוערת ה",
        "למרות שזה לא נשמע טוב לפי המשיכה ה",
        "למרות שזה לא נשמע טוב לפי העז ה"
      ]);
    },
    theWayOf:function(){
      return rndListItem([
        "ברברית",
        "פילוסופית",
        "קומוניסטית",
        "אמריקאית",
        "נאצית",
        "אמריקאית",
        "קפיטליסטית",
        "נאוקלסית",
        "פרימדרנית",
        "אומנותית",
        "מיוחדת"
      ]);
    },
    onlyThe:function(O){
      return rndListItem([
        "אבל כל "+O+" יודע",
        "אבל רק "+O+" יוכל לספר את האמת",
        "אבל אם תפגוש "+O+" תדע"
      ]);
    },
    time:function(){
      return rndListItem([
        "בחצות",
        "בזריחה",
        "כשהשמש השנייה זורחת",
        "כשהיד מצביעה על יבשת אסיה",
        "בביאת המשיח",
        "כשמוחמד יחזור מן המתים",
        "כשחיה ושמשון מתאחדים ויוצרים את חיה הקדמונית",
        "כשצ'אק נוריס(הוא גם פועל)"
      ]);
    },
    youMay:function(){
      return rndListItem([
        "אפשר לראות את",
        "אפשר להבחין בנוכחות",
        "מרגישים בנשמה את",
        "אפשר לראות את",
        "מוחמד יוצא לסיבוב הופעות עם",
        "קללה מגיעה מנשמתו של",
        "הוא יורד לכדור הארץ ומציג את עצמו בתור",
        "על כפות המאזניים נעמד",
        "לא ישמע טוב"
      ])
    },
    name:function(){
      return rndListItem([
        "המשיח",
        "ישו",
        "מוחמד",
        "הפרציפלוחה הכי שאי אפשר אפילו",
        "צ'אק נוריס",
        "ילד מחונן",
        "ילד מחונחן",
        "אורי",
        "מחולל המשפטים הזה ממש",
        "זרובבל",
        "מרגול",
        "צ'ארלס דרווין"
      ])
    },
    actn:function(){
      return rndListItem([
        "אוכל פרציפלוחות תמימות עם",
        "מגרד את הגב יחד עם",
        "מגרד את הגב של",
        "מוריד מערכו של",
        "מקלל את",
        "מטיל קללה על",
        "מלמד אלגברה את",
        "מרגל אחרי",
        "אוכל את"
      ])
    },
    psv:function(){
      return rndListItem([
        "שנהנה מכל רגע",
        "ששוחה ביאוש",
        "שאוכל את עצמו עם מלח",
        "שמתפלל לדפנה הקדושה עם מלח",
        "שמתפלל למפיק הקדוש עם מלח",
        "שאוכל פלאפל",
        "שאוכל פיתה בלי פלאפל",
        "שלא אוכל מלח",
        "שזורע מלח על הפצעים בתקווה שיצמח עץ",
        "שנהנה מאיזה נוטרינו"
      ])
    }
};

module.exports =  function(){
  with(actions){
    var theObject = object();
    var theObject2 = object();
    switch (rnd(0,4)) {
      case 0:
        var theObjes = theObject+"ים";
        break;
      case 1:
        var theObjes = theObject2+"ים";
        break;
      default:
        var theObjes = objes();
        break;
    }
    var f = function(theObject2,theObjes){
      var str = "";
      str += adobj()+" "+witha();
      str += madeBy()+" "+whileThey()+theObject2+" "+adobj()+" "+because();
      str += ", "+but()+", ";
      str += voice()+":\""+theObjes+", "+objes_adobjs()+" "+adobjs()+"\", ";
      str += butSome()+theWayOf()+" שלפיה:\""+theObjes+", "+objes_adobjs()+" "+adobjs()+"\",  ";
      str += onlyThe(object()+" "+adobj())+" ש"+time()+" "+youMay()+" "+name();
      str += " כשהוא "+actn()+" "+name()+" "+psv();
      return str;
    };
    return theObject + " " + f(theObject2,theObjes)+" "+f(theObject,objes())+" "+f(theObject2,theObjes)+" "+f(theObject,theObjes);
  }
};
