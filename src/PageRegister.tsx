export function PageRegister() {
    const handleAction = (formData: FormData) => {
        for (const [key, value] of formData.entries()) {
            console.log(`${key}: ${value}`);
        }
    };

    return (
        <>
            <header>
                <h2>Header</h2>
            </header>

            <main>
                <h1>Register Page</h1>

                {/* IDEA: Don't forget the aria label / description / value / input ??? */}

                <form action={handleAction}>
                    <fieldset>
                        <legend>Create new account</legend>

                        <fieldset>
                            <legend>Identity Questions</legend>

                            <section>
                                <label htmlFor="first-name">First Name</label>
                                <p>Use your real first name so people can recognize you.</p>
                                <input
                                    id="first-name"
                                    name="first-name"
                                    type="text"
                                    required={true}
                                    disabled={false}
                                    placeholder="Wayna"
                                />
                            </section>

                            <section>
                                <label htmlFor="last-name">Last Name</label>
                                <p>Use your real last name so people can recognize you.</p>
                                <input
                                    id="last-name"
                                    name="last-name"
                                    type="text"
                                    required={true}
                                    disabled={false}
                                    placeholder="BUZZ"
                                />
                            </section>

                            <section>
                                <label htmlFor="birth-date">Birth Date</label>
                                <p>Select your real birth date.</p>
                                <input id="birth-date" name="birth-date" type="date" required={true} disabled={false} />
                            </section>
                        </fieldset>

                        <fieldset>
                            <legend>Geographical Questions</legend>

                            <section>
                                <label htmlFor="street-address">Street Address</label>
                                <p>Use your real address so we can deliver our product to you.</p>
                                <input
                                    id="street-address"
                                    name="street-address"
                                    type="text"
                                    required={true}
                                    disabled={false}
                                    placeholder="21 Locust Street"
                                />
                            </section>

                            <section>
                                <label htmlFor="country-address">Country</label>
                                <p>Select the country you reside in.</p>
                                <select id="country-address" name="country-address" required={true}>
                                    <option value="">-- Select a country --</option>
                                    <option value="Afghanistan">Afghanistan</option>
                                    <option value="Albania">Albania</option>
                                    <option value="Algeria">Algeria</option>
                                    <option value="Andorra">Andorra</option>
                                    <option value="Angola">Angola</option>
                                    <option value="Argentina">Argentina</option>
                                    <option value="Armenia">Armenia</option>
                                    <option value="Australia">Australia</option>
                                    <option value="Austria">Austria</option>
                                    <option value="Azerbaijan">Azerbaijan</option>
                                    <option value="Bahamas">Bahamas</option>
                                    <option value="Bahrain">Bahrain</option>
                                    <option value="Bangladesh">Bangladesh</option>
                                    <option value="Barbados">Barbados</option>
                                    <option value="Belarus">Belarus</option>
                                    <option value="Belgium">Belgium</option>
                                    <option value="Belize">Belize</option>
                                    <option value="Benin">Benin</option>
                                    <option value="Bhutan">Bhutan</option>
                                    <option value="Bolivia">Bolivia</option>
                                    <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                                    <option value="Botswana">Botswana</option>
                                    <option value="Brazil">Brazil</option>
                                    <option value="Brunei">Brunei</option>
                                    <option value="Bulgaria">Bulgaria</option>
                                    <option value="Burkina Faso">Burkina Faso</option>
                                    <option value="Burundi">Burundi</option>
                                    <option value="Cambodia">Cambodia</option>
                                    <option value="Cameroon">Cameroon</option>
                                    <option value="Canada">Canada</option>
                                    <option value="Cape Verde">Cape Verde</option>
                                    <option value="Central African Republic">Central African Republic</option>
                                    <option value="Chad">Chad</option>
                                    <option value="Chile">Chile</option>
                                    <option value="China">China</option>
                                    <option value="Colombia">Colombia</option>
                                    <option value="Comoros">Comoros</option>
                                    <option value="Congo">Congo</option>
                                    <option value="Costa Rica">Costa Rica</option>
                                    <option value="Croatia">Croatia</option>
                                    <option value="Cuba">Cuba</option>
                                    <option value="Cyprus">Cyprus</option>
                                    <option value="Czech Republic">Czech Republic</option>
                                    <option value="Denmark">Denmark</option>
                                    <option value="Djibouti">Djibouti</option>
                                    <option value="Dominica">Dominica</option>
                                    <option value="Dominican Republic">Dominican Republic</option>
                                    <option value="Ecuador">Ecuador</option>
                                    <option value="Egypt">Egypt</option>
                                    <option value="El Salvador">El Salvador</option>
                                    <option value="Equatorial Guinea">Equatorial Guinea</option>
                                    <option value="Eritrea">Eritrea</option>
                                    <option value="Estonia">Estonia</option>
                                    <option value="Eswatini">Eswatini</option>
                                    <option value="Ethiopia">Ethiopia</option>
                                    <option value="Fiji">Fiji</option>
                                    <option value="Finland">Finland</option>
                                    <option value="France">France</option>
                                    <option value="Gabon">Gabon</option>
                                    <option value="Gambia">Gambia</option>
                                    <option value="Georgia">Georgia</option>
                                    <option value="Germany">Germany</option>
                                    <option value="Ghana">Ghana</option>
                                    <option value="Greece">Greece</option>
                                    <option value="Grenada">Grenada</option>
                                    <option value="Guatemala">Guatemala</option>
                                    <option value="Guinea">Guinea</option>
                                    <option value="Guinea-Bissau">Guinea-Bissau</option>
                                    <option value="Guyana">Guyana</option>
                                    <option value="Haiti">Haiti</option>
                                    <option value="Honduras">Honduras</option>
                                    <option value="Hungary">Hungary</option>
                                    <option value="Iceland">Iceland</option>
                                    <option value="India">India</option>
                                    <option value="Indonesia">Indonesia</option>
                                    <option value="Iran">Iran</option>
                                    <option value="Iraq">Iraq</option>
                                    <option value="Ireland">Ireland</option>
                                    <option value="Israel">Israel</option>
                                    <option value="Italy">Italy</option>
                                    <option value="Jamaica">Jamaica</option>
                                    <option value="Japan">Japan</option>
                                    <option value="Jordan">Jordan</option>
                                    <option value="Kazakhstan">Kazakhstan</option>
                                    <option value="Kenya">Kenya</option>
                                    <option value="Kiribati">Kiribati</option>
                                    <option value="Korea, North">Korea, North</option>
                                    <option value="Korea, South">Korea, South</option>
                                    <option value="Kosovo">Kosovo</option>
                                    <option value="Kuwait">Kuwait</option>
                                    <option value="Kyrgyzstan">Kyrgyzstan</option>
                                    <option value="Laos">Laos</option>
                                    <option value="Latvia">Latvia</option>
                                    <option value="Lebanon">Lebanon</option>
                                    <option value="Lesotho">Lesotho</option>
                                    <option value="Liberia">Liberia</option>
                                    <option value="Libya">Libya</option>
                                    <option value="Liechtenstein">Liechtenstein</option>
                                    <option value="Lithuania">Lithuania</option>
                                    <option value="Luxembourg">Luxembourg</option>
                                    <option value="Madagascar">Madagascar</option>
                                    <option value="Malawi">Malawi</option>
                                    <option value="Malaysia">Malaysia</option>
                                    <option value="Maldives">Maldives</option>
                                    <option value="Mali">Mali</option>
                                    <option value="Malta">Malta</option>
                                    <option value="Marshall Islands">Marshall Islands</option>
                                    <option value="Mauritania">Mauritania</option>
                                    <option value="Mauritius">Mauritius</option>
                                    <option value="Mexico">Mexico</option>
                                    <option value="Micronesia">Micronesia</option>
                                    <option value="Moldova">Moldova</option>
                                    <option value="Monaco">Monaco</option>
                                    <option value="Mongolia">Mongolia</option>
                                    <option value="Montenegro">Montenegro</option>
                                    <option value="Morocco">Morocco</option>
                                    <option value="Mozambique">Mozambique</option>
                                    <option value="Myanmar">Myanmar</option>
                                    <option value="Namibia">Namibia</option>
                                    <option value="Nauru">Nauru</option>
                                    <option value="Nepal">Nepal</option>
                                    <option value="Netherlands">Netherlands</option>
                                    <option value="New Zealand">New Zealand</option>
                                    <option value="Nicaragua">Nicaragua</option>
                                    <option value="Niger">Niger</option>
                                    <option value="Nigeria">Nigeria</option>
                                    <option value="North Macedonia">North Macedonia</option>
                                    <option value="Norway">Norway</option>
                                    <option value="Oman">Oman</option>
                                    <option value="Pakistan">Pakistan</option>
                                    <option value="Palau">Palau</option>
                                    <option value="Palestine">Palestine</option>
                                    <option value="Panama">Panama</option>
                                    <option value="Papua New Guinea">Papua New Guinea</option>
                                    <option value="Paraguay">Paraguay</option>
                                    <option value="Peru">Peru</option>
                                    <option value="Philippines">Philippines</option>
                                    <option value="Poland">Poland</option>
                                    <option value="Portugal">Portugal</option>
                                    <option value="Qatar">Qatar</option>
                                    <option value="Romania">Romania</option>
                                    <option value="Russia">Russia</option>
                                    <option value="Rwanda">Rwanda</option>
                                    <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                                    <option value="Saint Lucia">Saint Lucia</option>
                                    <option value="Saint Vincent and the Grenadines">
                                        Saint Vincent and the Grenadines
                                    </option>
                                    <option value="Samoa">Samoa</option>
                                    <option value="San Marino">San Marino</option>
                                    <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                                    <option value="Saudi Arabia">Saudi Arabia</option>
                                    <option value="Senegal">Senegal</option>
                                    <option value="Serbia">Serbia</option>
                                    <option value="Seychelles">Seychelles</option>
                                    <option value="Sierra Leone">Sierra Leone</option>
                                    <option value="Singapore">Singapore</option>
                                    <option value="Slovakia">Slovakia</option>
                                    <option value="Slovenia">Slovenia</option>
                                    <option value="Solomon Islands">Solomon Islands</option>
                                    <option value="Somalia">Somalia</option>
                                    <option value="South Africa">South Africa</option>
                                    <option value="South Sudan">South Sudan</option>
                                    <option value="Spain">Spain</option>
                                    <option value="Sri Lanka">Sri Lanka</option>
                                    <option value="Sudan">Sudan</option>
                                    <option value="Suriname">Suriname</option>
                                    <option value="Sweden">Sweden</option>
                                    <option value="Switzerland">Switzerland</option>
                                    <option value="Syria">Syria</option>
                                    <option value="Taiwan">Taiwan</option>
                                    <option value="Tajikistan">Tajikistan</option>
                                    <option value="Tanzania">Tanzania</option>
                                    <option value="Thailand">Thailand</option>
                                    <option value="Timor-Leste">Timor-Leste</option>
                                    <option value="Togo">Togo</option>
                                    <option value="Tonga">Tonga</option>
                                    <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                                    <option value="Tunisia">Tunisia</option>
                                    <option value="Turkey">Turkey</option>
                                    <option value="Turkmenistan">Turkmenistan</option>
                                    <option value="Tuvalu">Tuvalu</option>
                                    <option value="Uganda">Uganda</option>
                                    <option value="Ukraine">Ukraine</option>
                                    <option value="United Arab Emirates">United Arab Emirates</option>
                                    <option value="United Kingdom">United Kingdom</option>
                                    <option value="United States">United States</option>
                                    <option value="Uruguay">Uruguay</option>
                                    <option value="Uzbekistan">Uzbekistan</option>
                                    <option value="Vanuatu">Vanuatu</option>
                                    <option value="Vatican City">Vatican City</option>
                                    <option value="Venezuela">Venezuela</option>
                                    <option value="Vietnam">Vietnam</option>
                                    <option value="Yemen">Yemen</option>
                                    <option value="Zambia">Zambia</option>
                                    <option value="Zimbabwe">Zimbabwe</option>
                                </select>
                            </section>
                        </fieldset>

                        <fieldset>
                            <legend>Sexual Questions</legend>

                            <section>
                                <label htmlFor="biological-sex">Biological Sex</label>
                                <p>Select your biological sex.</p>
                                <select id="biological-sex" name="biological-sex" required={true}>
                                    <option value="">-- Select a sex --</option>
                                    <option value={'man'}>Man</option>
                                    <option value={'woman'}>Woman</option>
                                    <option value={'both'}>Both</option>
                                </select>
                            </section>

                            <section>
                                <label htmlFor="sexual-orientation">Sexual Orientation</label>
                                <p>Select your sexual orientation.</p>
                                <select id="sexual-orientation" name="sexual-orientation" required={true}>
                                    <option value="">-- Select a orientation --</option>
                                    <option value={'heterosexual'}>Heterosexual</option>
                                    <option value={'homosexual'}>Homosexual</option>
                                    <option value={'bisexual'}>Bisexual</option>
                                    <option value={'pansexual'}>Pansexual</option>
                                    <option value={'asexual'}>Asexual</option>
                                </select>
                            </section>

                            <section>
                                <label htmlFor="first-crush">First Crush</label>
                                <p>Select your real first crush date.</p>
                                <input
                                    id="first-crush"
                                    name="first-crush"
                                    type="date"
                                    required={true}
                                    disabled={false}
                                />
                            </section>

                            <section>
                                <label htmlFor="first-time">First Time</label>
                                <p>Select your real first time date.</p>
                                <input id="first-time" name="first-time" type="date" required={true} disabled={false} />
                            </section>
                        </fieldset>

                        {/* HOTFIX: The "value", "id" and "name" of "celebrity-interest" was the same as "celebrity-beauty" resulting in bug. */}

                        <fieldset>
                            <legend>World Wide Questions</legend>

                            <section>
                                <label htmlFor="celebrity-interest">Celebrity Interest</label>
                                <p>Check the celebrity you found interesting to follow on social media.</p>
                                <section>
                                    <input
                                        type="checkbox"
                                        id="tailor-swift-interest"
                                        name="celebrity-interest"
                                        value="tailor-swift-interest"
                                    />
                                    <label htmlFor="tailor-swift-interest">Tailor Swift</label>
                                </section>

                                <section>
                                    <input
                                        type="checkbox"
                                        id="elon-musk-interest"
                                        name="celebrity-interest"
                                        value="elon-musk-interest"
                                    />
                                    <label htmlFor="elon-musk-interest">Elon Musk</label>
                                </section>

                                <section>
                                    <input
                                        type="checkbox"
                                        id="uncle-bob-interest"
                                        name="celebrity-interest"
                                        value="uncle-bob-interest"
                                    />
                                    <label htmlFor="uncle-bob-interest">Uncle Bob</label>
                                </section>

                                <section>
                                    <input
                                        type="checkbox"
                                        id="emmanuel-macron-interest"
                                        name="celebrity-interest"
                                        value="emmanuel-macron-interest"
                                    />
                                    <label htmlFor="emmanuel-macron-interest">Emmanuel Macron</label>
                                </section>

                                <section>
                                    <input
                                        type="checkbox"
                                        id="georgia-meloni-interest"
                                        name="celebrity-interest"
                                        value="georgia-meloni-interest"
                                    />
                                    <label htmlFor="georgia-meloni-interest">Georgia Meloni</label>
                                </section>
                            </section>

                            {/* IDEA: Replace the <section> by <fieldset> and <legend> ??? */}

                            <section>
                                <label htmlFor="political-interest">Political Interest</label>
                                <p>Check the political interest you found important right now.</p>
                                <section>
                                    <input
                                        type="checkbox"
                                        id="identity-issue"
                                        name="political-interest"
                                        value="identity-issue"
                                    />
                                    <label htmlFor="identity-issue">Identity Issue</label>
                                </section>

                                <section>
                                    <input
                                        type="checkbox"
                                        id="economical-instability"
                                        name="political-interest"
                                        value="economical-instability"
                                    />
                                    <label htmlFor="economical-instability">Economical Instability</label>
                                </section>

                                <section>
                                    <input
                                        type="checkbox"
                                        id="defense-vulnerability"
                                        name="political-interest"
                                        value="defense-vulnerability"
                                    />
                                    <label htmlFor="defense-vulnerability">Defense Vulnerability</label>
                                </section>

                                <section>
                                    <input
                                        type="checkbox"
                                        id="energy-dependence"
                                        name="political-interest"
                                        value="energy-dependence"
                                    />
                                    <label htmlFor="energy-dependence">Energy Dependence</label>
                                </section>
                            </section>

                            <section>
                                <label htmlFor="celebrity-beauty">Celebrity Beauty</label>
                                <p>Check the celebrity you found handsome.</p>
                                <section>
                                    <input
                                        type="checkbox"
                                        id="tailor-swift"
                                        name="celebrity-beauty"
                                        value="tailor-swift"
                                    />
                                    <label htmlFor="tailor-swift">Tailor Swift</label>
                                </section>

                                <section>
                                    <input type="checkbox" id="elon-musk" name="celebrity-beauty" value="elon-musk" />
                                    <label htmlFor="elon-musk">Elon Musk</label>
                                </section>

                                <section>
                                    <input type="checkbox" id="uncle-bob" name="celebrity-beauty" value="uncle-bob" />
                                    <label htmlFor="uncle-bob">Uncle Bob</label>
                                </section>

                                <section>
                                    <input
                                        type="checkbox"
                                        id="emmanuel-macron"
                                        name="celebrity-beauty"
                                        value="emmanuel-macron"
                                    />
                                    <label htmlFor="emmanuel-macron">Emmanuel Macron</label>
                                </section>

                                <section>
                                    <input
                                        type="checkbox"
                                        id="georgia-meloni"
                                        name="celebrity-beauty"
                                        value="georgia-meloni"
                                    />
                                    <label htmlFor="georgia-meloni">Georgia Meloni</label>
                                </section>
                            </section>
                        </fieldset>

                        <fieldset>
                            <legend>Development Questions</legend>

                            <section>
                                <label htmlFor="favorite-language">Favorite Language</label>
                                <p>Select your favorite programming language.</p>
                                <section>
                                    <input type="radio" id="rust" name="favorite-language" value="rust" />
                                    <label htmlFor="rust">Rust</label>
                                </section>

                                <section>
                                    <input type="radio" id="golang" name="favorite-language" value="golang" />
                                    <label htmlFor="golang">Golang</label>
                                </section>

                                <section>
                                    <input type="radio" id="javascript" name="favorite-language" value="javascript" />
                                    <label htmlFor="javascript">JavaScript</label>
                                </section>

                                <section>
                                    <input type="radio" id="java" name="favorite-language" value="java" />
                                    <label htmlFor="java">Java</label>
                                </section>

                                <section>
                                    <input type="radio" id="c" name="favorite-language" value="c" />
                                    <label htmlFor="c">C</label>
                                </section>

                                <section>
                                    <input type="radio" id="assembly" name="favorite-language" value="assembly" />
                                    <label htmlFor="assembly">Assembly</label>
                                </section>
                            </section>

                            <section>
                                <label htmlFor="favorite-system">Favorite Operating System</label>
                                <p>Select your favorite operating system.</p>
                                <section>
                                    <input type="radio" id="windows" name="favorite-system" value="windows" />
                                    <label htmlFor="windows">Windows</label>
                                </section>

                                <section>
                                    <input type="radio" id="osx" name="favorite-system" value="osx" />
                                    <label htmlFor="osx">Os X</label>
                                </section>

                                <section>
                                    <input type="radio" id="android" name="favorite-system" value="android" />
                                    <label htmlFor="android">Android</label>
                                </section>

                                <section>
                                    <input type="radio" id="ios" name="favorite-system" value="ios" />
                                    <label htmlFor="ios">IOS</label>
                                </section>

                                <section>
                                    <input type="radio" id="linux" name="favorite-system" value="linux" />
                                    <label htmlFor="linux">Linux</label>
                                </section>
                            </section>

                            <section>
                                <label htmlFor="favorite-framework">Favorite Framework</label>
                                <p>Select your favorite framework for web development.</p>
                                <section>
                                    <input type="radio" id="none" name="favorite-framework" value="none" />
                                    <label htmlFor="none">None</label>
                                </section>

                                <section>
                                    <input type="radio" id="react" name="favorite-framework" value="react" />
                                    <label htmlFor="react">React</label>
                                </section>

                                <section>
                                    <input type="radio" id="angular" name="favorite-framework" value="angular" />
                                    <label htmlFor="angular">Angular</label>
                                </section>

                                <section>
                                    <input type="radio" id="vue" name="favorite-framework" value="vue" />
                                    <label htmlFor="vue">Vue</label>
                                </section>

                                <section>
                                    <input type="radio" id="svelte" name="favorite-framework" value="svelte" />
                                    <label htmlFor="svelte">Svelte</label>
                                </section>
                            </section>
                        </fieldset>

                        {/* IDEA: don't forget for all html markup to check fi they have some "placeholder", "required", "disabled", "aria..., "defaultValue"... */}

                        <fieldset>
                            <legend>Review Questions</legend>

                            <section>
                                <label htmlFor="form-quality">Form Quality</label>
                                <p>Write down the good quality you found in this form.</p>
                                <textarea
                                    id="form-quality"
                                    name="form-quality"
                                    rows={5}
                                    cols={30}
                                    defaultValue={'It is very pretty...'}
                                ></textarea>
                            </section>

                            <section>
                                <label htmlFor="form-issue">Form Issue</label>
                                <p>Write down the issues you found in this form.</p>
                                <textarea
                                    id="form-issue"
                                    name="form-issue"
                                    rows={5}
                                    cols={30}
                                    defaultValue={'It is time consuming...'}
                                ></textarea>
                            </section>

                            <section>
                                <label htmlFor="form-feedback">Form Feedback</label>
                                <p>Write down any feedback you want to share with us.</p>
                                <textarea
                                    id="form-feedback"
                                    name="form-feedback"
                                    rows={5}
                                    cols={30}
                                    defaultValue={'It could introduce a section about pancakes...'}
                                ></textarea>
                            </section>
                        </fieldset>

                        <button type="submit">Submit</button>
                        <button type="reset">Reset</button>
                        <button type="button">Button</button>
                    </fieldset>
                </form>
            </main>

            <footer>
                <h2>Footer</h2>
            </footer>
        </>
    );
}
