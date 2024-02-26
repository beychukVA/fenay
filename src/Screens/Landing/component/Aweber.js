import React, { useEffect } from "react";

const Aweber = (props) => {

    console.log("SUBS EMAIL", props);
  useEffect(() => {
    (function () {
      function browserSupportsNewWindows(userAgent) {
        var rules = [
          "FBIOS",
          "Twitter for iPhone",
          "WebView",
          "(iPhone|iPod|iPad)(?!.*Safari/)",
          "Android.*(wv|.0.0.0)",
        ];
        var pattern = new RegExp("(" + rules.join("|") + ")", "ig");
        return !pattern.test(userAgent);
      }

      if (
        !browserSupportsNewWindows(
          navigator.userAgent || navigator.vendor || window.opera
        )
      ) {
        document
          .getElementById("af-form-1930888551")
          .parentElement.removeAttribute("target");
      }
    })();

    document.getElementById("redirect_811003d8be88d74c68711199ff2806d4").value =
      document.location;
  }, []);

  return (
    <form method="post" className="af-form-wrapper" accept-charset="UTF-8" action="https://www.aweber.com/scripts/addlead.pl"  >
    <div style={{display: "none"}}>
    <input type="hidden" name="meta_web_form_id" value="1930888551" />
    <input type="hidden" name="meta_split_id" value="" />
    <input type="hidden" name="listname" value="awlist6277462" />
    <input type="hidden" name="redirect" value="" id="redirect_811003d8be88d74c68711199ff2806d4" />
    
    <input type="hidden" name="meta_adtracking" value="My_Web_Form" />
    <input type="hidden" name="meta_message" value="1" />
    <input type="hidden" name="meta_required" value="email" />
    
    <input type="hidden" name="meta_tooltip" value="" />
    </div>
    <div id="af-form-1930888551" className="af-form"><div id="af-body-1930888551" className="af-body af-standards">
    <div className="af-element">
    <label className="previewLabel" for="awf_field-114184785">Email</label>
    <div className="af-textWrap"><input className="text" id="awf_field-114184785" type="text" name="email" value={props.email} tabindex="500" onfocus=" if (this.value == '') { this.value = ''; }" onblur="if (this.value == '') { this.value='';} " />
    </div><div className="af-clear"></div>
    </div>
    <div className="af-element buttonContainer">
    <input name="submit" className="submit" type="submit" value="Submit" tabindex="501" />
    <div className="af-clear"></div>
    </div>
    </div>
    </div>
    <div style={{display: "none"}}><img src="https://forms.aweber.com/form/displays.htm?id=jJzMDBwcHKysjA==" alt="" /></div>
    </form>
  );
};

export default Aweber;
