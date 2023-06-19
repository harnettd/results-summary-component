SRC := common.blocks
DIST := bundles
SCSS := $(wildcard $(SRC)/*.scss)

$(DIST)/styles.min.css: $(DIST)/styles.css
	css-minify -f $(DIST)/styles.css -o $(DIST)

$(DIST)/styles.css: $(SCSS) 
	sass $(SRC)/styles.scss $(DIST)/styles.css

.PHONY: clean

clean:
	rm $(DIST)/styles.css $(DIST)/styles.css.map $(DIST)/styles.min.css
