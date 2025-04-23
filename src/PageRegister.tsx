import { FormDescription } from './components/form/FormDescription';
import { FormFieldset } from './components/form/structure/FormFieldset';
import { FormInputDate } from './components/form/input/FormInputDate';
import { FormInputText } from './components/form/input/FormInputText';
import { FormLabel } from './components/form/structure/FormLabel';
import { FormLegend } from './components/form/structure/FormLegend';
import { FormOption } from './components/form/select/FormOption';
import { FormSelect } from './components/form/select/FormSelect';
import { FormInputRadio } from './components/form/input/FormInputRadio';
import { FormTextArea } from './components/form/input/FormTextarea';
import { FormInputCheckBox } from './components/form/input/FormInputCheckBox';
import { FormSection } from './components/form/structure/FormSection';
import { Form } from './components/form/structure/Form';

export function PageRegister() {
    const handleAction = (formData: FormData) => {
        for (const [key, value] of formData.entries()) {
            console.log(`${key}: ${value}`);
        }
    };

    /* IDEA: don't forget for all html markup to check fi they have some "placeholder", "required", "disabled", "aria...", "autocomplete", "defaultValue"... */

    /* IDEA: Don't forget the aria label / description / value / input ??? */

    /* OPINION: The FormSection should have the htmlFor to make sure the Label and Input are in sync ??? */
    /* Forget it, sometime the Id is not the same, and sometime the name is not the same */
    /* EXCEPT if I create Specific FormSection like "FormSectionFormInputTextArea", "FormSectionSelectFormOption"... */
    /* Don't divert from HTML markup */

    // TODO: Do the Button too

    // NOTE: If possible, make all of them controlled component

    // NOTE: Next page should focus on number, fake data and analytic. For example a "User Dashboard" or "Product Dashboard" page

    // NOTE: See if, in components, I should create some common Abstraction grouping similar "Individual Part" into "Semi-Complete Component".
    // For example, create a <FormTextualSection> merging <FormLabel>, <FormDescription>, <FormSection> and <FormInputText>

    // NOTE: Finally, remember to be careful because some "individual parts" like Input may be grouped together under one single file. But they are visually different.
    // Meaning you'll still need divide them later into their respective file (if you don't want to bloat your file that is).

    return (
        <>
            <header>
                <h2>Header</h2>
            </header>

            <main>
                <h1>Register Page</h1>

                <Form action={handleAction}>
                    <FormFieldset>
                        <FormLegend>Create new account</FormLegend>

                        <FormFieldset>
                            <FormLegend>Identity Questions</FormLegend>

                            <FormSection>
                                <FormLabel htmlFor="first-name">First Name</FormLabel>
                                <FormDescription>Use your real first name so people can recognize you.</FormDescription>
                                <FormInputText id="first-name" name="first-name" placeholder="Wayna" />
                            </FormSection>

                            <FormSection>
                                <FormLabel htmlFor="last-name">Last Name</FormLabel>
                                <FormDescription>Use your real last name so people can recognize you.</FormDescription>
                                <FormInputText id="last-name" name="last-name" placeholder="BUZZ" />
                            </FormSection>

                            <FormSection>
                                <FormLabel htmlFor="birth-date">Birth Date</FormLabel>
                                <FormDescription>Select your real birth date.</FormDescription>
                                <FormInputDate id="birth-date" name="birth-date" />
                            </FormSection>
                        </FormFieldset>

                        <FormFieldset>
                            <FormLegend>Geographical Questions</FormLegend>

                            <FormSection>
                                <FormLabel htmlFor="street-address">Street Address</FormLabel>
                                <FormDescription>
                                    Use your real address so we can deliver our product to you.
                                </FormDescription>
                                <FormInputText
                                    id="street-address"
                                    name="street-address"
                                    placeholder="21 Locust Street"
                                />
                            </FormSection>

                            <FormSection>
                                <FormLabel htmlFor="country-address">Country Address</FormLabel>
                                <FormDescription>Select the country you reside in.</FormDescription>
                                <FormSelect id="country-address" name="country-address">
                                    <FormOption value="">-- Select a country --</FormOption>
                                    <FormOption value="Afghanistan">Afghanistan</FormOption>
                                    <FormOption value="Albania">Albania</FormOption>
                                    <FormOption value="Algeria">Algeria</FormOption>
                                    <FormOption value="Andorra">Andorra</FormOption>
                                    <FormOption value="Angola">Angola</FormOption>
                                    <FormOption value="Argentina">Argentina</FormOption>
                                    <FormOption value="Armenia">Armenia</FormOption>
                                    <FormOption value="Australia">Australia</FormOption>
                                    <FormOption value="Austria">Austria</FormOption>
                                    <FormOption value="Azerbaijan">Azerbaijan</FormOption>
                                    <FormOption value="Bahamas">Bahamas</FormOption>
                                    <FormOption value="Bahrain">Bahrain</FormOption>
                                    <FormOption value="Bangladesh">Bangladesh</FormOption>
                                    <FormOption value="Barbados">Barbados</FormOption>
                                    <FormOption value="Belarus">Belarus</FormOption>
                                    <FormOption value="Belgium">Belgium</FormOption>
                                    <FormOption value="Belize">Belize</FormOption>
                                    <FormOption value="Benin">Benin</FormOption>
                                    <FormOption value="Bhutan">Bhutan</FormOption>
                                    <FormOption value="Bolivia">Bolivia</FormOption>
                                    <FormOption value="Bosnia and Herzegovina">Bosnia and Herzegovina</FormOption>
                                    <FormOption value="Botswana">Botswana</FormOption>
                                    <FormOption value="Brazil">Brazil</FormOption>
                                    <FormOption value="Brunei">Brunei</FormOption>
                                    <FormOption value="Bulgaria">Bulgaria</FormOption>
                                    <FormOption value="Burkina Faso">Burkina Faso</FormOption>
                                    <FormOption value="Burundi">Burundi</FormOption>
                                    <FormOption value="Cambodia">Cambodia</FormOption>
                                    <FormOption value="Cameroon">Cameroon</FormOption>
                                    <FormOption value="Canada">Canada</FormOption>
                                    <FormOption value="Cape Verde">Cape Verde</FormOption>
                                    <FormOption value="Central African Republic">Central African Republic</FormOption>
                                    <FormOption value="Chad">Chad</FormOption>
                                    <FormOption value="Chile">Chile</FormOption>
                                    <FormOption value="China">China</FormOption>
                                    <FormOption value="Colombia">Colombia</FormOption>
                                    <FormOption value="Comoros">Comoros</FormOption>
                                    <FormOption value="Congo">Congo</FormOption>
                                    <FormOption value="Costa Rica">Costa Rica</FormOption>
                                    <FormOption value="Croatia">Croatia</FormOption>
                                    <FormOption value="Cuba">Cuba</FormOption>
                                    <FormOption value="Cyprus">Cyprus</FormOption>
                                    <FormOption value="Czech Republic">Czech Republic</FormOption>
                                    <FormOption value="Denmark">Denmark</FormOption>
                                    <FormOption value="Djibouti">Djibouti</FormOption>
                                    <FormOption value="Dominica">Dominica</FormOption>
                                    <FormOption value="Dominican Republic">Dominican Republic</FormOption>
                                    <FormOption value="Ecuador">Ecuador</FormOption>
                                    <FormOption value="Egypt">Egypt</FormOption>
                                    <FormOption value="El Salvador">El Salvador</FormOption>
                                    <FormOption value="Equatorial Guinea">Equatorial Guinea</FormOption>
                                    <FormOption value="Eritrea">Eritrea</FormOption>
                                    <FormOption value="Estonia">Estonia</FormOption>
                                    <FormOption value="Eswatini">Eswatini</FormOption>
                                    <FormOption value="Ethiopia">Ethiopia</FormOption>
                                    <FormOption value="Fiji">Fiji</FormOption>
                                    <FormOption value="Finland">Finland</FormOption>
                                    <FormOption value="France">France</FormOption>
                                    <FormOption value="Gabon">Gabon</FormOption>
                                    <FormOption value="Gambia">Gambia</FormOption>
                                    <FormOption value="Georgia">Georgia</FormOption>
                                    <FormOption value="Germany">Germany</FormOption>
                                    <FormOption value="Ghana">Ghana</FormOption>
                                    <FormOption value="Greece">Greece</FormOption>
                                    <FormOption value="Grenada">Grenada</FormOption>
                                    <FormOption value="Guatemala">Guatemala</FormOption>
                                    <FormOption value="Guinea">Guinea</FormOption>
                                    <FormOption value="Guinea-Bissau">Guinea-Bissau</FormOption>
                                    <FormOption value="Guyana">Guyana</FormOption>
                                    <FormOption value="Haiti">Haiti</FormOption>
                                    <FormOption value="Honduras">Honduras</FormOption>
                                    <FormOption value="Hungary">Hungary</FormOption>
                                    <FormOption value="Iceland">Iceland</FormOption>
                                    <FormOption value="India">India</FormOption>
                                    <FormOption value="Indonesia">Indonesia</FormOption>
                                    <FormOption value="Iran">Iran</FormOption>
                                    <FormOption value="Iraq">Iraq</FormOption>
                                    <FormOption value="Ireland">Ireland</FormOption>
                                    <FormOption value="Israel">Israel</FormOption>
                                    <FormOption value="Italy">Italy</FormOption>
                                    <FormOption value="Jamaica">Jamaica</FormOption>
                                    <FormOption value="Japan">Japan</FormOption>
                                    <FormOption value="Jordan">Jordan</FormOption>
                                    <FormOption value="Kazakhstan">Kazakhstan</FormOption>
                                    <FormOption value="Kenya">Kenya</FormOption>
                                    <FormOption value="Kiribati">Kiribati</FormOption>
                                    <FormOption value="Korea, North">Korea, North</FormOption>
                                    <FormOption value="Korea, South">Korea, South</FormOption>
                                    <FormOption value="Kosovo">Kosovo</FormOption>
                                    <FormOption value="Kuwait">Kuwait</FormOption>
                                    <FormOption value="Kyrgyzstan">Kyrgyzstan</FormOption>
                                    <FormOption value="Laos">Laos</FormOption>
                                    <FormOption value="Latvia">Latvia</FormOption>
                                    <FormOption value="Lebanon">Lebanon</FormOption>
                                    <FormOption value="Lesotho">Lesotho</FormOption>
                                    <FormOption value="Liberia">Liberia</FormOption>
                                    <FormOption value="Libya">Libya</FormOption>
                                    <FormOption value="Liechtenstein">Liechtenstein</FormOption>
                                    <FormOption value="Lithuania">Lithuania</FormOption>
                                    <FormOption value="Luxembourg">Luxembourg</FormOption>
                                    <FormOption value="Madagascar">Madagascar</FormOption>
                                    <FormOption value="Malawi">Malawi</FormOption>
                                    <FormOption value="Malaysia">Malaysia</FormOption>
                                    <FormOption value="Maldives">Maldives</FormOption>
                                    <FormOption value="Mali">Mali</FormOption>
                                    <FormOption value="Malta">Malta</FormOption>
                                    <FormOption value="Marshall Islands">Marshall Islands</FormOption>
                                    <FormOption value="Mauritania">Mauritania</FormOption>
                                    <FormOption value="Mauritius">Mauritius</FormOption>
                                    <FormOption value="Mexico">Mexico</FormOption>
                                    <FormOption value="Micronesia">Micronesia</FormOption>
                                    <FormOption value="Moldova">Moldova</FormOption>
                                    <FormOption value="Monaco">Monaco</FormOption>
                                    <FormOption value="Mongolia">Mongolia</FormOption>
                                    <FormOption value="Montenegro">Montenegro</FormOption>
                                    <FormOption value="Morocco">Morocco</FormOption>
                                    <FormOption value="Mozambique">Mozambique</FormOption>
                                    <FormOption value="Myanmar">Myanmar</FormOption>
                                    <FormOption value="Namibia">Namibia</FormOption>
                                    <FormOption value="Nauru">Nauru</FormOption>
                                    <FormOption value="Nepal">Nepal</FormOption>
                                    <FormOption value="Netherlands">Netherlands</FormOption>
                                    <FormOption value="New Zealand">New Zealand</FormOption>
                                    <FormOption value="Nicaragua">Nicaragua</FormOption>
                                    <FormOption value="Niger">Niger</FormOption>
                                    <FormOption value="Nigeria">Nigeria</FormOption>
                                    <FormOption value="North Macedonia">North Macedonia</FormOption>
                                    <FormOption value="Norway">Norway</FormOption>
                                    <FormOption value="Oman">Oman</FormOption>
                                    <FormOption value="Pakistan">Pakistan</FormOption>
                                    <FormOption value="Palau">Palau</FormOption>
                                    <FormOption value="Palestine">Palestine</FormOption>
                                    <FormOption value="Panama">Panama</FormOption>
                                    <FormOption value="Papua New Guinea">Papua New Guinea</FormOption>
                                    <FormOption value="Paraguay">Paraguay</FormOption>
                                    <FormOption value="Peru">Peru</FormOption>
                                    <FormOption value="Philippines">Philippines</FormOption>
                                    <FormOption value="Poland">Poland</FormOption>
                                    <FormOption value="Portugal">Portugal</FormOption>
                                    <FormOption value="Qatar">Qatar</FormOption>
                                    <FormOption value="Romania">Romania</FormOption>
                                    <FormOption value="Russia">Russia</FormOption>
                                    <FormOption value="Rwanda">Rwanda</FormOption>
                                    <FormOption value="Saint Kitts and Nevis">Saint Kitts and Nevis</FormOption>
                                    <FormOption value="Saint Lucia">Saint Lucia</FormOption>
                                    <FormOption value="Saint Vincent and the Grenadines">
                                        Saint Vincent and the Grenadines
                                    </FormOption>
                                    <FormOption value="Samoa">Samoa</FormOption>
                                    <FormOption value="San Marino">San Marino</FormOption>
                                    <FormOption value="Sao Tome and Principe">Sao Tome and Principe</FormOption>
                                    <FormOption value="Saudi Arabia">Saudi Arabia</FormOption>
                                    <FormOption value="Senegal">Senegal</FormOption>
                                    <FormOption value="Serbia">Serbia</FormOption>
                                    <FormOption value="Seychelles">Seychelles</FormOption>
                                    <FormOption value="Sierra Leone">Sierra Leone</FormOption>
                                    <FormOption value="Singapore">Singapore</FormOption>
                                    <FormOption value="Slovakia">Slovakia</FormOption>
                                    <FormOption value="Slovenia">Slovenia</FormOption>
                                    <FormOption value="Solomon Islands">Solomon Islands</FormOption>
                                    <FormOption value="Somalia">Somalia</FormOption>
                                    <FormOption value="South Africa">South Africa</FormOption>
                                    <FormOption value="South Sudan">South Sudan</FormOption>
                                    <FormOption value="Spain">Spain</FormOption>
                                    <FormOption value="Sri Lanka">Sri Lanka</FormOption>
                                    <FormOption value="Sudan">Sudan</FormOption>
                                    <FormOption value="Suriname">Suriname</FormOption>
                                    <FormOption value="Sweden">Sweden</FormOption>
                                    <FormOption value="Switzerland">Switzerland</FormOption>
                                    <FormOption value="Syria">Syria</FormOption>
                                    <FormOption value="Taiwan">Taiwan</FormOption>
                                    <FormOption value="Tajikistan">Tajikistan</FormOption>
                                    <FormOption value="Tanzania">Tanzania</FormOption>
                                    <FormOption value="Thailand">Thailand</FormOption>
                                    <FormOption value="Timor-Leste">Timor-Leste</FormOption>
                                    <FormOption value="Togo">Togo</FormOption>
                                    <FormOption value="Tonga">Tonga</FormOption>
                                    <FormOption value="Trinidad and Tobago">Trinidad and Tobago</FormOption>
                                    <FormOption value="Tunisia">Tunisia</FormOption>
                                    <FormOption value="Turkey">Turkey</FormOption>
                                    <FormOption value="Turkmenistan">Turkmenistan</FormOption>
                                    <FormOption value="Tuvalu">Tuvalu</FormOption>
                                    <FormOption value="Uganda">Uganda</FormOption>
                                    <FormOption value="Ukraine">Ukraine</FormOption>
                                    <FormOption value="United Arab Emirates">United Arab Emirates</FormOption>
                                    <FormOption value="United Kingdom">United Kingdom</FormOption>
                                    <FormOption value="United States">United States</FormOption>
                                    <FormOption value="Uruguay">Uruguay</FormOption>
                                    <FormOption value="Uzbekistan">Uzbekistan</FormOption>
                                    <FormOption value="Vanuatu">Vanuatu</FormOption>
                                    <FormOption value="Vatican City">Vatican City</FormOption>
                                    <FormOption value="Venezuela">Venezuela</FormOption>
                                    <FormOption value="Vietnam">Vietnam</FormOption>
                                    <FormOption value="Yemen">Yemen</FormOption>
                                    <FormOption value="Zambia">Zambia</FormOption>
                                    <FormOption value="Zimbabwe">Zimbabwe</FormOption>
                                </FormSelect>
                            </FormSection>
                        </FormFieldset>

                        <FormFieldset>
                            <FormLegend>Sexual Questions</FormLegend>

                            <FormSection>
                                <FormLabel htmlFor="biological-sex">Biological Sex</FormLabel>
                                <FormDescription>Select your biological sex.</FormDescription>
                                <FormSelect id="biological-sex" name="biological-sex">
                                    <FormOption value="">-- Select a sex --</FormOption>
                                    <FormOption value={'man'}>Man</FormOption>
                                    <FormOption value={'woman'}>Woman</FormOption>
                                    <FormOption value={'both'}>Both</FormOption>
                                </FormSelect>
                            </FormSection>

                            <FormSection>
                                <FormLabel htmlFor="sexual-orientation">Sexual Orientation</FormLabel>
                                <FormDescription>Select your sexual orientation.</FormDescription>
                                <FormSelect id="sexual-orientation" name="sexual-orientation">
                                    <FormOption value="">-- Select a orientation --</FormOption>
                                    <FormOption value={'heterosexual'}>Heterosexual</FormOption>
                                    <FormOption value={'homosexual'}>Homosexual</FormOption>
                                    <FormOption value={'bisexual'}>Bisexual</FormOption>
                                    <FormOption value={'pansexual'}>Pansexual</FormOption>
                                    <FormOption value={'asexual'}>Asexual</FormOption>
                                </FormSelect>
                            </FormSection>

                            <FormSection>
                                <FormLabel htmlFor="first-crush">First Crush</FormLabel>
                                <FormDescription>Select your real first crush date.</FormDescription>
                                <FormInputDate id="first-crush" name="first-crush" />
                            </FormSection>

                            <FormSection>
                                <FormLabel htmlFor="first-time">First Time</FormLabel>
                                <FormDescription>Select your real first time date.</FormDescription>
                                <FormInputDate id="first-time" name="first-time" />
                            </FormSection>
                        </FormFieldset>

                        <FormFieldset>
                            <FormLegend>World Wide Questions</FormLegend>

                            <FormSection>
                                <FormDescription>
                                    Check the celebrity you found interesting to follow on social media.
                                </FormDescription>
                                <FormSection>
                                    <FormInputCheckBox
                                        id="tailor-swift-interest"
                                        name="celebrity-interest"
                                        value="tailor-swift-interest"
                                    />
                                    <FormLabel htmlFor="tailor-swift-interest">Tailor Swift</FormLabel>
                                </FormSection>

                                <FormSection>
                                    <FormInputCheckBox
                                        id="elon-musk-interest"
                                        name="celebrity-interest"
                                        value="elon-musk-interest"
                                    />
                                    <FormLabel htmlFor="elon-musk-interest">Elon Musk</FormLabel>
                                </FormSection>

                                <FormSection>
                                    <FormInputCheckBox
                                        id="uncle-bob-interest"
                                        name="celebrity-interest"
                                        value="uncle-bob-interest"
                                    />
                                    <FormLabel htmlFor="uncle-bob-interest">Uncle Bob</FormLabel>
                                </FormSection>

                                <FormSection>
                                    <FormInputCheckBox
                                        id="emmanuel-macron-interest"
                                        name="celebrity-interest"
                                        value="emmanuel-macron-interest"
                                    />
                                    <FormLabel htmlFor="emmanuel-macron-interest">Emmanuel Macron</FormLabel>
                                </FormSection>

                                <FormSection>
                                    <FormInputCheckBox
                                        id="georgia-meloni-interest"
                                        name="celebrity-interest"
                                        value="georgia-meloni-interest"
                                    />
                                    <FormLabel htmlFor="georgia-meloni-interest">Georgia Meloni</FormLabel>
                                </FormSection>
                            </FormSection>

                            <FormSection>
                                <FormDescription>
                                    Check the political interest you found important right now.
                                </FormDescription>
                                <FormSection>
                                    <FormInputCheckBox
                                        id="identity-issue"
                                        name="political-interest"
                                        value="identity-issue"
                                    />
                                    <FormLabel htmlFor="identity-issue">Identity Issue</FormLabel>
                                </FormSection>

                                <FormSection>
                                    <FormInputCheckBox
                                        id="economical-instability"
                                        name="political-interest"
                                        value="economical-instability"
                                    />
                                    <FormLabel htmlFor="economical-instability">Economical Instability</FormLabel>
                                </FormSection>

                                <FormSection>
                                    <FormInputCheckBox
                                        id="defense-vulnerability"
                                        name="political-interest"
                                        value="defense-vulnerability"
                                    />
                                    <FormLabel htmlFor="defense-vulnerability">Defense Vulnerability</FormLabel>
                                </FormSection>

                                <FormSection>
                                    <FormInputCheckBox
                                        id="energy-dependence"
                                        name="political-interest"
                                        value="energy-dependence"
                                    />
                                    <FormLabel htmlFor="energy-dependence">Energy Dependence</FormLabel>
                                </FormSection>
                            </FormSection>

                            <FormSection>
                                <FormDescription>Check the celebrity you found handsome.</FormDescription>
                                <FormSection>
                                    <FormInputCheckBox id="tailor-swift" name="celebrity-beauty" value="tailor-swift" />
                                    <FormLabel htmlFor="tailor-swift">Tailor Swift</FormLabel>
                                </FormSection>

                                <FormSection>
                                    <FormInputCheckBox id="elon-musk" name="celebrity-beauty" value="elon-musk" />
                                    <FormLabel htmlFor="elon-musk">Elon Musk</FormLabel>
                                </FormSection>

                                <FormSection>
                                    <FormInputCheckBox id="uncle-bob" name="celebrity-beauty" value="uncle-bob" />
                                    <FormLabel htmlFor="uncle-bob">Uncle Bob</FormLabel>
                                </FormSection>

                                <FormSection>
                                    <FormInputCheckBox
                                        id="emmanuel-macron"
                                        name="celebrity-beauty"
                                        value="emmanuel-macron"
                                    />
                                    <FormLabel htmlFor="emmanuel-macron">Emmanuel Macron</FormLabel>
                                </FormSection>

                                <FormSection>
                                    <FormInputCheckBox
                                        id="georgia-meloni"
                                        name="celebrity-beauty"
                                        value="georgia-meloni"
                                    />
                                    <FormLabel htmlFor="georgia-meloni">Georgia Meloni</FormLabel>
                                </FormSection>
                            </FormSection>
                        </FormFieldset>

                        <FormFieldset>
                            <FormLegend>Development Questions</FormLegend>

                            <FormSection>
                                <FormDescription>Select your favorite programming language.</FormDescription>
                                <FormSection>
                                    <FormInputRadio id="rust" name="favorite-language" value="rust" />
                                    <FormLabel htmlFor="rust">Rust</FormLabel>
                                </FormSection>

                                <FormSection>
                                    <FormInputRadio id="golang" name="favorite-language" value="golang" />
                                    <FormLabel htmlFor="golang">Golang</FormLabel>
                                </FormSection>

                                <FormSection>
                                    <FormInputRadio id="javascript" name="favorite-language" value="javascript" />
                                    <FormLabel htmlFor="javascript">JavaScript</FormLabel>
                                </FormSection>

                                <FormSection>
                                    <FormInputRadio id="java" name="favorite-language" value="java" />
                                    <FormLabel htmlFor="java">Java</FormLabel>
                                </FormSection>

                                <FormSection>
                                    <FormInputRadio id="c" name="favorite-language" value="c" />
                                    <FormLabel htmlFor="c">C</FormLabel>
                                </FormSection>

                                <FormSection>
                                    <FormInputRadio id="assembly" name="favorite-language" value="assembly" />
                                    <FormLabel htmlFor="assembly">Assembly</FormLabel>
                                </FormSection>
                            </FormSection>

                            <FormSection>
                                <FormDescription>Select your favorite operating system.</FormDescription>
                                <FormSection>
                                    <FormInputRadio id="windows" name="favorite-system" value="windows" />
                                    <FormLabel htmlFor="windows">Windows</FormLabel>
                                </FormSection>

                                <FormSection>
                                    <FormInputRadio id="osx" name="favorite-system" value="osx" />
                                    <FormLabel htmlFor="osx">Os X</FormLabel>
                                </FormSection>

                                <FormSection>
                                    <FormInputRadio id="android" name="favorite-system" value="android" />
                                    <FormLabel htmlFor="android">Android</FormLabel>
                                </FormSection>

                                <FormSection>
                                    <FormInputRadio id="ios" name="favorite-system" value="ios" />
                                    <FormLabel htmlFor="ios">IOS</FormLabel>
                                </FormSection>

                                <FormSection>
                                    <FormInputRadio id="linux" name="favorite-system" value="linux" />
                                    <FormLabel htmlFor="linux">Linux</FormLabel>
                                </FormSection>
                            </FormSection>

                            <FormSection>
                                <FormDescription>Select your favorite framework for web development.</FormDescription>
                                <FormSection>
                                    <FormInputRadio id="none" name="favorite-framework" value="none" />
                                    <FormLabel htmlFor="none">None</FormLabel>
                                </FormSection>

                                <FormSection>
                                    <FormInputRadio id="react" name="favorite-framework" value="react" />
                                    <FormLabel htmlFor="react">React</FormLabel>
                                </FormSection>

                                <FormSection>
                                    <FormInputRadio id="angular" name="favorite-framework" value="angular" />
                                    <FormLabel htmlFor="angular">Angular</FormLabel>
                                </FormSection>

                                <FormSection>
                                    <FormInputRadio id="vue" name="favorite-framework" value="vue" />
                                    <FormLabel htmlFor="vue">Vue</FormLabel>
                                </FormSection>

                                <FormSection>
                                    <FormInputRadio id="svelte" name="favorite-framework" value="svelte" />
                                    <FormLabel htmlFor="svelte">Svelte</FormLabel>
                                </FormSection>
                            </FormSection>
                        </FormFieldset>

                        <FormFieldset>
                            <FormLegend>Review Questions</FormLegend>

                            <FormSection>
                                <FormLabel htmlFor="form-quality">Form Quality</FormLabel>

                                <FormDescription>Write down the good quality you found in this form.</FormDescription>

                                <FormTextArea
                                    id="form-quality"
                                    name="form-quality"
                                    placeholder="The form is pretty..."
                                ></FormTextArea>
                            </FormSection>

                            <FormSection>
                                <FormLabel htmlFor="form-issue">Form Issue</FormLabel>
                                <FormDescription>Write down the issues you found in this form.</FormDescription>
                                <FormTextArea
                                    id="form-issue"
                                    name="form-issue"
                                    placeholder="The form is time consuming..."
                                ></FormTextArea>
                            </FormSection>

                            <FormSection>
                                <FormLabel htmlFor="form-feedback">Form Feedback</FormLabel>
                                <FormDescription>Write down any feedback you want to share with us.</FormDescription>
                                <FormTextArea
                                    id="form-feedback"
                                    name="form-feedback"
                                    placeholder="The form could be shorter..."
                                ></FormTextArea>
                            </FormSection>
                        </FormFieldset>

                        <button type="submit">Submit</button>
                        <button type="reset">Reset</button>
                        <button type="button">Button</button>
                    </FormFieldset>
                </Form>
            </main>

            <footer>
                <h2>Footer</h2>
            </footer>
        </>
    );
}
