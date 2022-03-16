import {WideParagraph} from '../article/paragraph';
import {Table, TableBody, TableHead} from '../article/table';
import styled from 'styled-components';
import { FavouriteButton } from '../favourites/articleFavourites';

const LeftAlignedCell = styled.td`
    margin-left: 0.25em;
    text-align: left;
`;

const Image = styled.img`
    width: min(250px, calc(100% - 30px));
    height: min(250px, calc(100% - 30px));
    padding: 15px;
`;

export const TypesPage = () => (
    <>
        <WideParagraph>
            <h2>Arten von Zauberwürfeln <FavouriteButton /></h2>
            <p>
                Viele kennen den standardmäßigen 3x3x3 Würfel. Neben dieser recht
                einfachen Form gibt es noch einige weitere, die sich grob in die
                Kategorien
            </p>
            <ul>
                <li>Quadratische,</li>
                <li>Unregelmäßige,</li>
                <li>Formrätsel und</li>
                <li>Nicht-quadratische</li>
            </ul>
            <p>einteilen lassen. Hier werden einige Beispiele kurz vorgestellt.</p>
        </WideParagraph>
        <WideParagraph>
            <Table>
                <TableHead>
                    <th>Quadratisch</th>
                    <th>Unregelmäßig</th>
                    <th>Formrätsel</th>
                    <th>Nicht quadratisch</th>
                </TableHead>
                <TableBody>
                    <tr>
                        <LeftAlignedCell>
                            "Normale" Zauberwürfel, die es in verschiedenen Größen gibt. Sie
                            können alle mit ähnlichen Algorithmen gelöst werden.
                        </LeftAlignedCell>
                        <LeftAlignedCell>
                            Die Unregelmäßigkeit dieser Würfel führt beim Lösen zu einer
                            Veränderung der Form. Anstatt sie zu lösen, kann man auch
                            "Skulpturen" aus ihnen bauen.
                        </LeftAlignedCell>
                        <LeftAlignedCell>
                            Bei dieser Art des Zauberwürfels geht es nicht um das Sortieren
                            der Farben, sondern um das Wiederherstellen der korrekten Form.
                        </LeftAlignedCell>
                        <LeftAlignedCell>
                            Zauberwürfel müssen nicht unbedingt 6-seitige Würfel sein, auch
                            Pyramiden, hexagonale Prismen und mehr sind möglich.
                        </LeftAlignedCell>
                    </tr>
                    <tr>
                        <td>
                            <Image src="images/normalRubic.jpg" alt="3x3x3"/>
                            <br/>
                            <a href="https://www.knobelbox.com/zauberwuerfel/original-rubik-s/844/rubik-s-cube?c=19"
                               target="_blank">
                                Shopseite
                            </a>
                        </td>
                        <td>
                            <Image src="images/rubicsEdge.jpg" alt="3x3x1"/>
                            <br/>
                            <a href="https://www.knobelbox.com/zauberwuerfel/original-rubik-s/5780/rubik-s-edge" target="_blank">
                                Shopseite
                            </a>
                        </td>
                        <td>
                            <Image src="images/pear.jpg" alt="Birne"/>
                            <br/>
                            <a href="https://www.knobelbox.com/zauberwuerfel/spezialformen/5130/fanxin-pear-cube?c=19"
                               target="_blank">
                                Shopseite
                            </a>
                        </td>
                        <td>
                            <Image src="images/pyramid.jpg" alt="Pyramide"/>
                            <br/>
                            <a href="https://www.amazon.com/Dreampark-Pyramid-Speed-Cube-Black/dp/B016G44ABI" target="_blank">
                                Shopseite
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Image src="images/hugeCube.jpg" alt="8x8x8"/>
                            <br/>
                            <a href="https://www.knobelbox.com/zauberwuerfel/wuerfel-2x2x2-bis-13x13x13/8x8x8/3545/yuxin-huanglong-8x8x8-magic-cube-schwarz"
                               target="_blank">
                                Shopseite
                            </a>
                        </td>
                        <td>
                            <Image src="images/2x2x3.jpg" alt="Quadun2"/>
                            <br/>
                            <a href="https://www.knobelbox.com/zauberwuerfel/wuerfel-2x2x2-bis-13x13x13/2x3x3/3669/qiyi-2x2x3-cube"
                               target="_blank">
                                Shopseite
                            </a>
                        </td>
                        <td>
                            <Image src="images/eiForm.jpg" alt="Egg"/>
                            <br/>
                            <a href="https://www.knobelbox.com/geduldsspiele/schluesselanhaenger/zauberwuerfel/2527/meffert-s-mini-gear-egg-schluesselanhaenger?c=19"
                               target="_blank">
                                Shopseite
                            </a>
                        </td>
                        <td>
                            <Image src="images/rubicsHexagon.jpg" alt="Hexa"/>
                            <br/>
                            <a href="https://www.amazon.de/EASEHOME-Zauberwürfel-Dodekaeder-Aufkleber-Erwachsene/dp/B07B4RG2CS"
                               target="_blank">
                                Shopseite
                            </a>
                        </td>
                    </tr>
                </TableBody>
            </Table>
        </WideParagraph>
    </>
);